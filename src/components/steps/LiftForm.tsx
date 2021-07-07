import { Button } from "../button/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/formDataSlice";
import { Form, Input, Label } from "../../styles/Forms";
import { useSteps } from "../../hooks/useSteps";

export const LiftForm = () => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { goToNextStep } = useSteps();
  const onSubmit = (data: any) => {
    const value = data.lift;
    const stepName = "lift";
    dispatch(add({ value, stepName }));
    goToNextStep();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>Tiene Ascensor?</Label>
      <Input {...register("lift")} />
      <Button
        disabled
        type="submit"
        label="Siguiente"
        onClick={handleSubmit(onSubmit)}
      />
    </Form>
  );
};
