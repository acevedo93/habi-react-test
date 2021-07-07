import { useState } from "react";
import { Button } from "../button/Button";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { add } from "../../redux/slices/formDataSlice";
import { Form, Input, Label } from "../../styles/Forms";
import { useSteps } from "../../hooks/useSteps";

export const ParkingLotForm = () => {
  const [parkingLot, setParkingLot] = useState(false);
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const { goToNextStep } = useSteps();

  const onSubmit = (data: any) => {
    const stepName = "parkingLot";
    let value = parkingLot
      ? { userHas: parkingLot, covered: data.covered }
      : { userHas: parkingLot, covered: false };
    dispatch(add({ value, stepName }));
    goToNextStep();
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Label>Tu inmueble tiene parqueadero?</Label>
      <input
        type="checkbox"
        {...register("userhas")}
        onChange={() => setParkingLot(!parkingLot)}
      />
      {parkingLot && (
        <>
          <input type="checkbox" {...register("covered")} />
        </>
      )}
      <Button
        disabled
        type="submit"
        label="Siguiente"
        onClick={handleSubmit(onSubmit)}
      />
    </Form>
  );
};
