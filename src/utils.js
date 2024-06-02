
export function processTimeSeriesData(data) {
    const countsByHour = data.reduce((acc, curr) => {
      const hour = curr.timestamp.slice(0, 13); // "YYYY-MM-DDTHH"
      acc[hour] = (acc[hour] || 0) + 1;
      return acc;
    }, {});

    return Object.keys(countsByHour).sort().map(hour => ({
      date: hour,
      count: countsByHour[hour]
    }));
  }
  

export function processCategoryData(data) {
  if (!Array.isArray(data)) {
    console.error("Invalid data for processing categories:", data);
    return []; // Return an empty array if data is not valid
  }

  const categoryCounts = data.reduce((acc, curr) => {
    const category = curr.alert && curr.alert.category; // Ensure alert and category exist
    if (category) {
      acc[category] = (acc[category] || 0) + 1;
    }
    return acc;
  }, {});

  return Object.keys(categoryCounts).map((name) => ({
    name,
    value: categoryCounts[name],
  }));
}

export function processSeverityData(data) {
  if (!Array.isArray(data)) {
    console.error("Invalid data: ", data);
    return []; 
  }

  const severityCounts = data.reduce((acc, curr) => {
    const severity = curr.alert && curr.alert.severity;
    if (severity) {
      acc[severity] = (acc[severity] || 0) + 1;
    }
    return acc;
  }, {});

  return Object.keys(severityCounts).map((severity) => ({
    severity,
    count: severityCounts[severity],
  }));
}


export function processIPData(data) {
    if (!Array.isArray(data)) {
      console.error("Invalid data: ", data);
      return [];
    }
  
    // Use a Map to aggregate counts by IP pair
    const counts = data.reduce((acc, curr) => {
      const key = `${curr.src_ip} -> ${curr.dest_ip}`;
      if (!acc.has(key)) {
        acc.set(key, { srcIP: curr.src_ip, destIP: curr.dest_ip, count: 0 });
      }
      acc.get(key).count += 1;
      return acc;
    }, new Map());
  
    // Convert the map values back to an array
    return Array.from(counts.values());
  }
  
export function processRealTimeLineChart(data) {
    if (!Array.isArray(data)) {
      console.error('Invalid data:', data);
      return [];
    }
  
    
    const dataByTime = data.reduce((acc, curr) => {
      const time = new Date(curr.timestamp).getMinutes();
      acc[time] = (acc[time] || 0) + curr.count; // Sum up counts by time unit
      return acc;
    }, {});
  
    const processedData = Object.keys(dataByTime).map(time => ({
      time: `${time}:00`, 
      count: dataByTime[time]
    }));
    processedData.sort((a, b) => parseInt(a.time) - parseInt(b.time));
  
    return processedData;
  }
  
  
  
  export function processNetworkTrafficData(data) {
    return data.map(entry => ({
      time: new Date(entry.timestamp).toLocaleTimeString(),
      volume: entry.flow_id // Assuming flow_id represents the volume or traffic load
    }));
  }
  
  export function processConnectionRatioData(data) {
    const results = data.reduce((acc, entry) => {
      if (entry.alert && entry.alert.action) {
        const status = entry.alert.action;
        if (!acc[status]) {
          acc[status] = { name: status, value: 0, color: status === 'allowed' ? '#00C49F' : '#FF8042' };
        }
        acc[status].value++;
      }
      return acc;
    }, {});
  
    return Object.values(results);
  }

  export function processMostTargetedServicesData(data) {
    const serviceCounts = data.reduce((acc, entry) => {
      const service = entry.dest_ip; // Assuming destination IP represents a service
      if (!acc[service]) acc[service] = 0;
      acc[service]++;
      return acc;
    }, {});
  
    return Object.keys(serviceCounts).map(service => ({
      service,
      count: serviceCounts[service]
    }));
  }
  

  export function processEventTypeData(data) {
    const eventTypeCounts = data.reduce((acc, entry) => {
      const eventType = entry.event_type;
      if (!acc[eventType]) {
        acc[eventType] = { name: eventType, value: 0, color: getRandomColor() }; // Assign random colors for each type
      }
      acc[eventType].value++;
      return acc;
    }, {});
  
    return Object.values(eventTypeCounts);
  }
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  
  
  
  