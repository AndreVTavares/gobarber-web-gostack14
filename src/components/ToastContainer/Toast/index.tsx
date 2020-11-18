import React from 'react';

const Toast: React.FC = () => {
  return (
    <FiAlertCircle size={20} />
    <div>
      <strong>{message.title}</strong>
      {message.description && <p>{message.description}</p>}
    </div>
    <button onClick={() => removeToast(message.id)} type="button">
      <FiXCircle size={18} />
    </button>
  )
}