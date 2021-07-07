import { Button } from "../button/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/formDataSlice";
import { Form, Input, Label } from "../../styles/Forms";
import { useSteps } from "../../hooks/useSteps";

export const AddressForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();
  const { goToNextStep } = useSteps();

  const onSubmit = (data: any) => {
    const value = data.address;
    const stepName = "address";
    dispatch(add({ value, stepName }));
    goToNextStep();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>Ingresa tu Direccion</Label>
      <Input {...register("address", { required: true })} />
      <Button
        disabled={!isValid}
        type="submit"
        label="Siguiente"
        onClick={handleSubmit(onSubmit)}
      />
    </Form>
  );
};
