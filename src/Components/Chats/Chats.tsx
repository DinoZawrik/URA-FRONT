import React, { useState, useEffect, useRef } from "react";
import "./Chats.scss";

// Интерфейс для пропсов компонента Chats
interface Props {
  userResponse: string; // Ответ пользователя
  botResponse: {
    purpose: string; // Цель ответа бота
    message: string; // Сообщение от бота
    options?: string[]; // Опции ответа бота
    sender: string; // Отправитель (bot или user)
  };
  sendUserResponse: string; // Отправленный пользователем ответ
  optionClick: (ev: React.MouseEvent<HTMLElement>) => void; // Функция для обработки клика по опции
}

// Интерфейс информации о сообщениях
interface MessagesInfo {
  purpose?: string; 
  message: string; // Сообщение
  options?: string[]; // Опции
  sender: string; // Отправитель
}

// Компонент Chats
const Chats: React.FC<Props> = props => {
  const [messages, setMessages] = useState<MessagesInfo[]>([]); // Состояние сообщений
  const dummyRef = useRef<HTMLDivElement>(null); // Ref для автоскролла
  const bodyRef = useRef<HTMLDivElement>(null); // Ref для общего контейнера сообщений

  // stacking up messages
  useEffect(() => {
    // Логика для добавления сообщений и ответов бота
  }, [props.sendUserResponse, props.botResponse]);

  // enable autoscroll after each message
  useEffect(() => {
    // Логика для автоскролла
  }, [messages]);

  // JSX для отображения сообщений
  return (
    <div className="message-container" ref={bodyRef}>
      {messages.map(chat => (
        <div key={chat.message}>
          <div className={`message ${chat.sender}`}>
            <p>{chat.message}</p>
          </div>
          {chat.options ? (
            <div className="options">
              <div>
                <i className="far fa-hand-pointer"></i>
              </div>
              {chat.options.map(option => (
                <p
                  onClick={e => props.optionClick(e)}
                  data-id={option}
                  key={option}
                >
                  {option}
                </p>
              ))}
            </div>
          ) : null}
          <div ref={dummyRef} className="dummy-div"></div>
        </div>
      ))}
    </div>
  );
};

export default Chats;

