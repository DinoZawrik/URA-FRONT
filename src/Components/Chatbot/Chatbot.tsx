import React, { useState } from "react";
import Chats from "../Chats/Chats";
import "./Chatbot.scss";

interface ResponseBotObject {
  purpose: string;
  message: string;
  options?: string[];
  sender: string;
}

const Chatbot: React.FC = () => {
  const [userResponse, setUserResponse] = useState<string>("");
  const [botResponse, setBotResponse] = useState<ResponseBotObject>({
    purpose: "",
    message: "",
    sender: "bot"
  });
  const [sendUserResponse, setSendUserResponse] = useState<string>("");

  // Обработка клика на опцию
  const optionClick = (e: React.MouseEvent<HTMLElement>) => {
    let option = e.currentTarget.dataset.id;
    // Логика обработки клика на опцию может быть добавлена здесь
  };

  // Обработка изменения ввода в текстовом поле
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserResponse(e.target.value);
  };

  // Обработка отправки формы
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Логика обработки отправки формы может быть добавлена здесь
    setUserResponse("");
  };

  return (
    <div className="chat-container">
      {/* Рендеринг компонента Chats с необходимыми пропсами */}
      <Chats
        userResponse={userResponse}
        botResponse={botResponse}
        sendUserResponse={sendUserResponse}
        optionClick={optionClick}
      />
      <form onSubmit={e => handleSubmit(e)} className="form-container">
        {/* Поле ввода для ответа пользователя */}
        <input
          onChange={e => handleInputChange(e)}
          value={userResponse}
        ></input>
        {/* Кнопка для отправки ответа пользователя */}
        <button type="submit">
          <i className="far fa-paper-plane"></i>
        </button>
      </form>
    </div>
  );
};

export default Chatbot;

