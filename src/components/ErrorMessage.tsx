type TErrorMessageProps = {
  message: string;
};

export default function ErrorMessage({ message }: TErrorMessageProps) {
  return <div>{message}</div>;
}
