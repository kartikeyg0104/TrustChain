// Start with empty notifications - they will be generated based on user actions
export let notifications = [];

// Utility function to generate notifications based on user activity
export const generateNotification = (type, data) => {
  const id = Date.now() + Math.random();
  const timestamp = new Date().toISOString();
  
  const notificationTemplates = {
    property_viewed: {
      type: 'property',
      title: 'Property Viewed',
      message: `You viewed "${data.propertyTitle}". Check back for updates or similar properties.`,
      icon: '👁️',
      actionUrl: `/properties/${data.propertyId}`
    },
    property_liked: {
      type: 'property',
      title: 'Property Saved',
      message: `You saved "${data.propertyTitle}" to your favorites.`,
      icon: '❤️',
      actionUrl: `/properties/${data.propertyId}`
    },
    agent_contacted: {
      type: 'transaction',
      title: 'Agent Contacted',
      message: `Your message has been sent to ${data.agentName}. They typically respond within 24 hours.`,
      icon: '📤',
      actionUrl: `/agents/${data.agentId}`
    },
    property_inquiry: {
      type: 'transaction',
      title: 'Inquiry Sent',
      message: `Your inquiry about "${data.propertyTitle}" has been sent to the listing agent.`,
      icon: '📩',
      actionUrl: `/properties/${data.propertyId}`
    },
    agent_viewed: {
      type: 'property',
      title: 'Agent Profile Viewed',
      message: `You viewed ${data.agentName}'s profile. Consider reaching out for property assistance.`,
      icon: '👤',
      actionUrl: `/agents/${data.agentId}`
    },
    search_performed: {
      type: 'system',
      title: 'Search Saved',
      message: `Your search for "${data.searchTerm}" has been saved. We'll notify you of new matches.`,
      icon: '🔍',
      actionUrl: `/properties?search=${encodeURIComponent(data.searchTerm)}`
    },
    welcome: {
      type: 'system',
      title: 'Welcome to TrustChain!',
      message: 'Start exploring properties and connecting with verified agents.',
      icon: '🎉',
      actionUrl: '/properties'
    }
  };

  const template = notificationTemplates[type];
  if (!template) return null;

  const notification = {
    id,
    ...template,
    time: 'Just now',
    read: false,
    timestamp,
    relatedId: data.relatedId || null
  };

  // Add notification to the global notifications array
  notifications.unshift(notification);
  
  // Keep only the last 50 notifications
  if (notifications.length > 50) {
    notifications = notifications.slice(0, 50);
  }

  return notification;
};

// Function to add a notification (used by other components)
export const addNotification = (type, data) => {
  return generateNotification(type, data);
};

// Function to get unread count
export const getUnreadCount = (notificationsList = notifications) => {
  return notificationsList.filter(notification => !notification.read).length;
};

// Function to filter notifications by type
export const filterNotifications = (notificationsList, filter) => {
  if (filter === 'all') return notificationsList;
  if (filter === 'unread') return notificationsList.filter(n => !n.read);
  return notificationsList.filter(n => n.type === filter);
};

// Function to mark notification as read
export const markAsRead = (notificationsList, notificationId) => {
  const updatedNotifications = notificationsList.map(notification =>
    notification.id === notificationId
      ? { ...notification, read: true }
      : notification
  );
  
  // Update global notifications array
  notifications = notifications.map(notification =>
    notification.id === notificationId
      ? { ...notification, read: true }
      : notification
  );
  
  return updatedNotifications;
};

// Function to mark all notifications as read
export const markAllAsRead = (notificationsList) => {
  const updatedNotifications = notificationsList.map(notification => ({ ...notification, read: true }));
  
  // Update global notifications array
  notifications = notifications.map(notification => ({ ...notification, read: true }));
  
  return updatedNotifications;
};

// Function to delete notification
export const deleteNotification = (notificationsList, notificationId) => {
  const updatedNotifications = notificationsList.filter(notification => notification.id !== notificationId);
  
  // Update global notifications array
  notifications = notifications.filter(notification => notification.id !== notificationId);
  
  return updatedNotifications;
};

// Function to get current notifications
export const getCurrentNotifications = () => {
  return [...notifications];
};

// Function to clear all notifications
export const clearAllNotifications = () => {
  notifications = [];
  return [];
};

// Initialize with welcome notification if no notifications exist
export const initializeNotifications = () => {
  if (notifications.length === 0) {
    generateNotification('welcome', {
      relatedId: 'welcome'
    });
  }
};
 
