import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaCheck, FaTrash, FaRegBell, FaFilter } from 'react-icons/fa';
import { 
  getCurrentNotifications,
  getUnreadCount,
  filterNotifications,
  markAsRead,
  markAllAsRead,
  deleteNotification,
  initializeNotifications
} from '../data/notifications';
import '../Styles/Notifications.css';

function Notifications() {
  const [notifications, setNotifications] = useState([]);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate();
  
  // Initialize notifications on component mount
  useEffect(() => {
    initializeNotifications();
    setNotifications(getCurrentNotifications());
  }, []);
  
  const handleMarkAsRead = (id) => {
    const updated = markAsRead(notifications, id);
    setNotifications(updated);
  };
  
  const handleMarkAllAsRead = () => {
    const updated = markAllAsRead(notifications);
    setNotifications(updated);
  };
  
  const handleDeleteNotification = (id) => {
    const updated = deleteNotification(notifications, id);
    setNotifications(updated);
  };

  const handleNotificationClick = (notification) => {
    // Mark as read when clicked
    if (!notification.read) {
      handleMarkAsRead(notification.id);
    }
    
    // Navigate to related page if actionUrl exists
    if (notification.actionUrl) {
      navigate(notification.actionUrl);
    }
  };
  
  const filteredNotifications = filterNotifications(notifications, filter);
  const unreadCount = getUnreadCount(notifications);


  useEffect(() => {
    document.title = unreadCount > 0 
      ? `(${unreadCount}) Notifications - TrustChain` 
      : 'Notifications - TrustChain';
    
    return () => {
      document.title = 'TrustChain';
    };
  }, [unreadCount]);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentNotifications = getCurrentNotifications();
      if (currentNotifications.length !== notifications.length) {
        setNotifications(currentNotifications);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [notifications.length]);

  return (
    <div className="notifications-page">
      <div className="notifications-header">
        <div className="container">
          <h1>Notifications</h1>
          <p>Your activity-based notifications will appear here</p>
        </div>
      </div>
      
      <div className="notifications-container">
        <div className="notifications-controls">
          <div className="notifications-stats">
            <div className="notification-counter">
              <FaRegBell />
              <span>{unreadCount} unread notifications</span>
            </div>
          </div>
          
          <div className="notifications-actions">
            {unreadCount > 0 && (
              <button className="mark-all-btn" onClick={handleMarkAllAsRead}>
                Mark All as Read
              </button>
            )}
            
            <div className="filter-dropdown">
              <button className="filter-btn">
                <FaFilter />
                <span>Filter</span>
              </button>
              <div className="filter-menu">
                <button 
                  className={filter === 'all' ? 'active' : ''}
                  onClick={() => setFilter('all')}
                >
                  All Notifications
                </button>
                <button 
                  className={filter === 'unread' ? 'active' : ''}
                  onClick={() => setFilter('unread')}
                >
                  Unread
                </button>
                <button 
                  className={filter === 'property' ? 'active' : ''}
                  onClick={() => setFilter('property')}
                >
                  Properties
                </button>
                <button 
                  className={filter === 'transaction' ? 'active' : ''}
                  onClick={() => setFilter('transaction')}
                >
                  Transactions
                </button>
                <button 
                  className={filter === 'alert' ? 'active' : ''}
                  onClick={() => setFilter('alert')}
                >
                  Alerts
                </button>
                <button 
                  className={filter === 'system' ? 'active' : ''}
                  onClick={() => setFilter('system')}
                >
                  System
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="notifications-list">
          {filteredNotifications.length === 0 ? (
            <div className="no-notifications">
              <div className="empty-icon">🔔</div>
              <h3>No notifications yet</h3>
              <p>
                {filter === 'unread' 
                  ? "You're all caught up! No unread notifications."
                  : "Start exploring properties and interacting with agents to receive notifications about your activity."
                }
              </p>
            </div>
          ) : (
            filteredNotifications.map(notification => (
              <div 
                key={notification.id} 
                className={`notification-item ${notification.read ? 'read' : 'unread'}`}
                onClick={() => handleNotificationClick(notification)}
                style={{ cursor: notification.actionUrl ? 'pointer' : 'default' }}
              >
                <div className={`notification-icon ${notification.type}`}>
                  {notification.icon}
                </div>
                
                <div className="notification-content">
                  <div className="notification-header">
                    <h3>{notification.title}</h3>
                    <span className="notification-time">{notification.time}</span>
                  </div>
                  <p className="notification-message">{notification.message}</p>
                </div>
                
                <div className="notification-actions" onClick={(e) => e.stopPropagation()}>
                  {!notification.read && (
                    <button 
                      className="mark-read-btn"
                      onClick={() => handleMarkAsRead(notification.id)}
                      title="Mark as read"
                    >
                      <FaCheck />
                    </button>
                  )}
                  <button 
                    className="delete-btn"
                    onClick={() => handleDeleteNotification(notification.id)}
                    title="Delete notification"
                  >
                    <FaTrash />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default Notifications;