import React, { useState } from "react";
import { GoogleMapa } from "./GoogleMapa";

export const Contacts = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("https://cv-backend-wks3.onrender.com/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(form)
      });

      if (response.ok) {
        alert("Сообщение отправлено!");
        setForm({ name: "", phone: "", email: "", message: "" }); // очистка формы
      } else {
        alert("Ошибка при отправке сообщения.");
      }
    } catch (error) {
      alert("Сервер недоступен. Проверь backend.");
      console.error(error);
    }
  };

  return (
    <div>
      {/*<GoogleMapa />*/}
      <h3>Formulario de contacto</h3>

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Имя"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="phone"
          placeholder="Телефон"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Сообщение"
          value={form.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Отправить</button>
      </form>
    </div>
  );
};
