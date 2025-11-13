export default function Contact() {
  return (
    <section>
      <h2 className="text-2xl font-semibold mb-3">Contact</h2>
      <p className="text-slate-600 mb-4">Use the form below or reach me directly at <strong>muhammedyamin003@gmail.com</strong></p>

      <form method="post" action="/api/contact" className="max-w-xl">
        <label className="block mb-2">
          <span className="text-sm">Name</span>
          <input name="name" className="mt-1 block w-full rounded border px-3 py-2" />
        </label>
        <label className="block mb-2">
          <span className="text-sm">Email</span>
          <input name="email" type="email" className="mt-1 block w-full rounded border px-3 py-2" />
        </label>
        <label className="block mb-2">
          <span className="text-sm">Message</span>
          <textarea name="message" rows={5} className="mt-1 block w-full rounded border px-3 py-2" />
        </label>
        <button type="submit" className="mt-3 bg-indigo-600 text-white px-4 py-2 rounded">Send</button>
      </form>
    </section>
  );
}
