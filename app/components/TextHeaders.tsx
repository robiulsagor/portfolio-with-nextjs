const TextHeaders = ({ header, subtitle, bg }: { header: string, subtitle: string, bg: string }) => {
    return (
        <div className="flex items-center justify-center flex-col gap-3">
            <h2 className={`${bg === 'white' ? 'text-slate-700' : 'text-slate-200'} text-4xl font-bold`}>{header} </h2>
            <p className={`${bg === 'white' ? 'text-slate-400' : 'text-slate-400'} text-md text-center`}>{subtitle}</p>
        </div>
    )
}

export default TextHeaders