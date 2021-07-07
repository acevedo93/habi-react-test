import { Button } from "../button/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/formDataSlice";
import { Form, Input, Label, ErrorForm } from "../../styles/Forms";
import { useSteps } from "../../hooks/useSteps";

export const NameForm = () => {
  const { goToNextStep } = useSteps();
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();
  const onSubmit = (data: any) => {
    const value = data.name;
    const stepName = "fullName";
    dispatch(add({ value, stepName }));
    goToNextStep();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>Ingresa tu nombre</Label>
      <Input {...register("name", { required: true })} />
      <div>
        <Button
          disabled={!isValid}
          type="submit"
          label="Siguiente"
          onClick={handleSubmit(onSubmit)}
        />
      </div>
    </Form>
  );
};
