import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/formDataSlice";
import { Button } from "../index";
import { Form, Select, Label, ErrorForm } from "../../styles/Forms";
import { generateValues } from "../../utils";
import { useSteps } from "../../hooks/useSteps";

export const FloorForm = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm({ mode: "onChange" });
  const dispatch = useDispatch();
  const { goToNextStep } = useSteps();

  const onSubmit = (data: any) => {
    const value = data.floor;
    const stepName = "floor";
    dispatch(add({ value, stepName }));
    goToNextStep();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>Seleccion el piso de tu inmueble</Label>
      <Select {...register("floor", { required: true })}>
        {generateValues(50).map((floor) => (
          <option key={floor} value={floor}>
            Piso {floor}
          </option>
        ))}
      </Select>

      <Button
        disabled={!isValid}
        type="submit"
        label="Siguiente"
        onClick={handleSubmit(onSubmit)}
      />
    </Form>
  );
};
