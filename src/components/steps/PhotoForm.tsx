import { Button } from "../button/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/formDataSlice";
import { Form, Input, Label } from "../../styles/Forms";
import { useSteps } from "../../hooks/useSteps";

export const PhotoForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { goToNextStep } = useSteps();

  const onSubmit = (data: any) => {
    const value = data.photo;
    const stepName = "photo";
    dispatch(add({ value, stepName }));
    goToNextStep();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>Sube una foto de tu inmueble</Label>
      <Input {...register("name")} />
      <Button
        disabled
        type="submit"
        label="Siguiente"
        onClick={handleSubmit(onSubmit)}
      />
    </Form>
  );
};
