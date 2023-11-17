type Props = {
  currentState: number;
  title: string;
  stage: number;
};

const FormHeader = ({ title, stage = 1, currentState }: Props) => {
  return (
    <div className="flex items-center gap-2">
      <span
        className={
          currentState == stage
            ? "h-[40px] w-[40px] text-white  bg-blue-500  justify-center items-center flex font-min rounded-full"
            : "h-[40px] w-[40px] text-white  bg-blue-300/20  justify-center items-center flex font-min rounded-full"
        }
      >
        {stage}
      </span>
      <p
        className={
          currentState == stage
            ? "font-min text-blue-400 font-regular"
            : "font-min text-blue-100 font-light"
        }
      >
        {title}
      </p>
    </div>
  );
};

export default FormHeader;
