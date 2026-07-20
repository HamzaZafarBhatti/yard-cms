export default function PrimaryButton({
    className = '',
    disabled,
    children,
    ...props
}) {
    return (
        <button
            {...props}
            className={
                `inline-flex items-center justify-center rounded-xl border border-transparent bg-green-600 px-6 py-3 text-sm font-bold tracking-widest text-white transition duration-150 ease-in-out hover:bg-green-700 hover:-translate-y-0.5 focus:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 active:bg-green-800 shadow-lg shadow-green-500/30 w-full sm:w-auto ${
                    disabled && 'opacity-25'
                } ` + className
            }
            disabled={disabled}
        >
            {children}
        </button>
    );
}

