import { useForm } from "react-hook-form";

const onSubmit = (data) => {
  alert(JSON.stringify(data));
};

const UserForm = () => {
  const { register, handleSubmit } = useForm();
  return (
    <>
      <h1> A FORM </h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>
            Name :
            <input {...register("name")} />
          </label>
        </div>
        <div>
          <label>
            Surname :
            <input {...register("surname")} />
          </label>
        </div>
        <div>
          <label>
            Email :
            <input {...register("email")} type="email" />
          </label>
        </div>
        <div>
          <label>
            Github profile URL :
            <input {...register("github")} />
          </label>
        </div>

        <input type="submit" value="Enviar" />
      </form>
    </>
  );
};

export default UserForm;
