import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Bem-vindo ao Weekly Groceries!</h1>
      <Link href="/auth/login">Vá para o Login</Link>
    </div>
  );
}
