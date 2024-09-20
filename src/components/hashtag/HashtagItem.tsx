type HastagItemProps = {
  onSelectCompany: (company: string) => void;
  company: string;
};

export default function HashtagItem({
  onSelectCompany,
  company,
}: HastagItemProps) {
  return (
    <li>
      <button onClick={() => onSelectCompany(company)}>#{company}</button>
    </li>
  );
}
