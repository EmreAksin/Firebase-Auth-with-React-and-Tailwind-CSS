import { useNavigate } from "react-router-dom";
import "../style/Home.css";


function Home() {

  const navigateTo = useNavigate();
  const toRegister = () => {
    navigateTo("/register")
  }

  return (
    <div className="pt-20">
      <header className="text-white py-16 text-center h-screen flex flex-col justify-center">
        <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
        <p className="text-lg mt-4">
          Welcome to our site, please press the sign in button to register and
          login using firebase
        </p>
        <button
          className="bg-yellow-500 text-blue-900 font-semibold px-6 py-3 mt-6 rounded-lg hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 max-lg:ml-24 max-lg:mr-24 ml-96 mr-96"
          onClick={toRegister}
        >
          Sign in
        </button>
      </header>

      <section className="bg-blue-200 p-16 text-center pb-40 border-b border-black">
        <h2 className="text-3xl font-semibold mb-8 max-md:text-xl">
          Our Services
        </h2>
        <div className=" justify-center space-x-8 max-md:space-x-1 cards text-blue-900">
          <div className="max-w-md bg-yellow-500 rounded-lg shadow-lg p-4 max-md:mt-2">
            <h3 className="text-xl font-semibold mt-4">Service 1</h3>
            <p className=" mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Cupiditate illum odit alias iste eius! Possimus saepe iure id,
              laudantium, architecto, expedita amet voluptate consequuntur
              recusandae cum sequi nobis asperiores non...
            </p>
          </div>
          <div className="max-w-md bg-yellow-500 rounded-lg shadow-lg p-4 max-md:mt-2">
            <h3 className="text-xl font-semibold mt-4">Service 2</h3>
            <p className=" mt-2">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam
              atque animi, laudantium voluptas ipsa, quam aut inventore id odit
              optio minima sit facilis cumque dolores quaerat, eum velit est
              nostrum!
            </p>
          </div>
          <div className="max-w-md bg-yellow-500 rounded-lg shadow-lg p-4 max-md:mt-2">
            <h3 className="text-xl font-semibold mt-4">Service 3</h3>
            <p className=" mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo,
              dicta fugit? Adipisci modi possimus assumenda velit veritatis
              magni voluptatem tempore quos odio! Sint, facere tempore ad sunt
              iste vitae optio!
            </p>
          </div>
        </div>
      </section>

      <section className="bg-blue-200 py-16 text-center border-b border-black">
        <h2 className="text-3xl font-semibold">About Us</h2>
        <p className="text-lg text-gray-700 mt-4 max-md:text-sm p-9">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sit
          amet erat nec ex iaculis auctor. Sed eget nulla sed libero volutpat
          tempus.
        </p>
      </section>

      <section className=" bg-blue-200 py-16 text-center">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <form className="max-w-md mx-auto mt-8">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500"
              rows="4"
            ></textarea>
          </div>
          <button className="bg-blue-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-600 focus:ring-4 focus:ring-blue-300">
            Send
          </button>
        </form>
      </section>
    </div>
  );
}

export default Home;
