import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex h-screen flex-col justify-center text-center">
      <h1 className="mb-4 text-2xl font-bold">Bienvenido a Academic</h1>
      <p className="text-fd-muted-foreground">
        Un sitio donde encontrarás documentación relacionada a la Ingeniería. Comienza en haciendo click en {' '}
        <Link
          href="/docs"
          className="text-fd-foreground font-semibold underline"
        >
          /docs
        </Link>{' '}.
      </p>
    </main>
  );
}
