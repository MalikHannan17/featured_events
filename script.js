document.addEventListener("DOMContentLoaded", () => {
  const eventsContainer = document.getElementById("events-container");
  const searchInput = document.getElementById("search");
  let eventsData = [];

  const events = [
    {
      name: "Tech Expo 2025",
      datetime: "2025-06-20T10:00",
      location: "City Convention Center Rawalpindi",
      description: "Explore the latest in technology and innovation."
    },
    {
      name: "Startup Pitch Night",
      datetime: "2025-06-15T18:00",
      location: "Downtown Co-Working Hub",
      description: "Watch startups pitch to investors live!"
    },
    {
      name: "Jazz in the Park",
      datetime: "2025-06-22T19:30",
      location: "Central Park Amphitheater",
      description: "An evening of smooth jazz under the stars."
    },
    {
      name: "Local Food Fest",
      datetime: "2025-06-25T11:00",
      location: "Riverside Plaza Islamabad",
      description: "Sample local cuisine from top chefs, food trucks, and more."
    },
    {
      name: "Art & Culture Walk",
      datetime: "2025-06-30T15:00",
      location: "Old Town Arts District Attock",
      description: "Discover the city's artistic heritage, featuring local artists."
    }
  ];

  function renderEvents(events) {
    eventsContainer.innerHTML = "";

    if (events.length === 0) {
      eventsContainer.innerHTML = "<p>No events found.</p>";
      return;
    }

    events.forEach((event) => {
      const card = document.createElement("div");
      card.className = "event-card";
      card.innerHTML = `
        <h3>${event.name}</h3>
        <p><strong>Date & Time:</strong> ${new Date(event.datetime).toLocaleString()}</p>
        <p><strong>Location:</strong> ${event.location}</p>
        <p>${event.description}</p>
        <button class="register-btn">Register</button>
      `;
      eventsContainer.appendChild(card);
    });
  }

  searchInput.addEventListener("input", () => {
    const keyword = searchInput.value.toLowerCase();
    const filtered = eventsData.filter(event =>
      event.name.toLowerCase().includes(keyword)
    );
    renderEvents(filtered);
  });

  // Initialize
  eventsData = events;
  renderEvents(eventsData);
});
