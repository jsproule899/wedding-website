export interface TextInputProps {
    id: string;
    className?: string;
    autoComplete?: string;
    defaultValue?: string;
    placeholder?: string;
    required?: boolean;
    onchange?: (event: React.FormEvent<HTMLInputElement>) => void;
    disabled?: boolean;
}


const TextInput = ({ id, className, autoComplete, defaultValue, placeholder, required, onchange, disabled }: TextInputProps) => (
    <input id={id} type="text" className={"bg-primary/20 rounded-2xl px-4 py-1 w-full text-primary font-minerva text-xs xs:text-sm focus:ring-primary/50 disabled:text-primary/30 disabled:bg-primary/10 " + (className || "")} autoComplete={autoComplete} placeholder={placeholder} defaultValue={defaultValue} required={required} onChange={onchange} disabled={disabled} />

)

export default TextInput