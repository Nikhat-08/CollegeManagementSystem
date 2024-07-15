import React, { useEffect } from 'react';

const MyDialogflowComponent = () => {
  useEffect(() => {
    // Load Dialogflow Messenger script dynamically
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = false;
    document.head.appendChild(script);

    // Clean up the script when the component is unmounted
    return () => {
      document.head.removeChild(script);
    };
  }, []); // Empty dependency array ensures the effect runs only once on mount

  return (
    <df-messenger
      intent="WELCOME"
      chat-title="VVITQueryAssist"
      agent-id="284e1e34-d95f-4f49-9475-e6b38b266f00"
      language-code="en"
    ></df-messenger>
  );
};

export default MyDialogflowComponent;
