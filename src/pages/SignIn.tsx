import LoginForm from "../components/forms/LoginForm";

type Props = {};

const SignIn = (props: Props) => {
  return (
    <section className="h-screen bg-slate-900 ">
      {/* container */}
      <main className="w-[90%] p-4 md:w-[40%] mx-auto">
        <LoginForm />
      </main>
    </section>
  );
};

export default SignIn;
