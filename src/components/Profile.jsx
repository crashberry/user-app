export const Profile = () => {
  return (
    <div className="row">
      <div className="col-md-3">
        <img
          src="https://img.freepik.com/free-psd/3d-illustration-bald-person-with-glasses_23-2149436184.jpg"
          alt="Аватар"
          width="100%"
        />
      </div>
      <div className="col-md-9">
        <p>
          <span>Фамилия и имя: </span>
          <span>Иван Иванов</span>
        </p>
        <p>
          <span>Телефон: </span>
          <span>+7 (999) 123-45-67</span>
        </p>
        <p>
          <span>E-mail: </span>
          <span>vanya@mail.ru</span>
        </p>
        <p>
          <span>Адрес: </span>
          <span>г. Орёл, ул. Ленина, д. 12, кв. 34</span>
        </p>
      </div>
    </div>
  );
};
