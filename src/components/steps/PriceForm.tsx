import { Button } from "../button/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

import { Form, Input, Label } from "../../styles/Forms";
import { useSteps } from "../../hooks/useSteps";

export const PriceForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { goToNextStep } = useSteps();
  const onSubmit = (data: any) => {
    const value = data.price;
    const stepName = "price";
    goToNextStep();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>Ingresa el precio de tu inmueble</Label>
      <Input {...register("price")} />
      <Button
        disabled
        type="submit"
        label="Siguiente"
        onClick={handleSubmit(onSubmit)}
      />
    </Form>
  );
};
