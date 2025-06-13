interface FormErrorProps {
    message: string | undefined;
}

const FormError = ({ message }: FormErrorProps) => {
  return (
    <div className="h-4">
      {message && (
        <p className="text-red font-normal text-lg">{message}</p>
      )}
    </div>
  );
};

export default FormError;
