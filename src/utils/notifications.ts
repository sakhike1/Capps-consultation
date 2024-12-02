import useNotificationStore from '../store/notificationStore';

export const sendWelcomeNotification = (userName: string) => {
  const { addNotification } = useNotificationStore.getState();
  
  addNotification({
    title: 'Welcome to Capps Consultation!',
    message: `Dear ${userName}, thank you for joining Capps Consultation. We're excited to help you bring your digital ideas to life. Browse our packages and feel free to reach out if you need any assistance.`,
    type: 'info'
  });
};