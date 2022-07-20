import "./CreateClubForm.scss";

import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from "../../../../../shared/Button";


type FormValues = {
    name: string,
    email: string,
    phone: string,
    location: string,
    priceRange: string,
    description: string
};

export function CreateClubForm() {
    const {register, handleSubmit} = useForm<FormValues>();
    const onSubmit: SubmitHandler<FormValues> = data => console.log(data);

  return (
    <form className="create-club-form" onSubmit={handleSubmit(onSubmit)}>
      
      <label className="create-club-form__name create-club-form__label">
        Name*
        <input {...register("name", {required: true})}  className="create-club-form__input" />
      </label>
      <label className="create-club-form__email create-club-form__label">
        Contact email*
        <input {...register("email", {required: true})} className="create-club-form__input" />
      </label>
      <label className="create-club-form__phone create-club-form__label">
        Phone number
        <input {...register("phone")} className="create-club-form__input" />
      </label>
      <label className="create-club-form__location create-club-form__label">
        Location
        <input {...register("location")} className="create-club-form__input" />
      </label>
      <label className="create-club-form__price create-club-form__label">
        Price range
        <input {...register("priceRange")} className="create-club-form__input" />
      </label>
      <label className="create-club-form__description create-club-form__label">
        Description
        <textarea {...register("description")} className="create-club-form__input" />
      </label>

      <Button label="Create" style="primary" type="submit" className="create-club-form__submit"/>
    </form>
  );
}
