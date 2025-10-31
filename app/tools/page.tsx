"use client";

export default function Tools(){
  const tools = [
    {name: 'MLflow', desc: 'Experiment tracking'},
    {name: 'Kubernetes', desc: 'Container orchestration'},
    {name: 'Airflow', desc: 'Pipelines'},
    {name: 'DVC', desc: 'Data versioning'}
  ]
  return (
    <section>
      <h1 className="text-3xl font-bold">Tools</h1>
      <ul className="mt-6 grid md:grid-cols-2 gap-4">
        {tools.map(t=> (
          <li key={t.name} className="p-4 rounded-xl border border-white/6">
            <h4 className="font-semibold">{t.name}</h4>
            <p className="opacity-80 text-sm">{t.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
