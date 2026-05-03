
export interface SelectInputProps {
    id: string;
    name: string;
    className?: string;
    placeholder?: string;
    required?: boolean;
    onchange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    disabled?: boolean;
    children: React.ReactNode;
}


const Select = ({ id, name, className,  placeholder, required, onchange, disabled, children }: SelectInputProps) => (
    <select id={id} name={name} className={"font-minerva text-sm border-2 border-primary focus:ring-primary/50 text-primary appearance-none bg-primary/20 px-4 py-1 rounded-full w-full border-none disabled:text-primary/30 disabled:bg-primary/10 disabled:border-primary/30 " + (className || "")}  defaultValue="" required={required} onChange={onchange} disabled={disabled}>
        {placeholder && <option value="" hidden>{placeholder}</option>}
        {children}
    </select>

)

export default Select