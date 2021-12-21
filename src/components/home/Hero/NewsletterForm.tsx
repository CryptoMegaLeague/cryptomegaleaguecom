function NewslettersForm() {
  return (
    <div className="w-auto h-auto bg-boneWhite shadow-md rounded px-8 pt-6 pb-8 mb-4 mx-4">
      <p className="lg:text-2xl my-4">
        Stay Updated With Our Newsletter!
      </p>
      <form className="mt-10">
        <div className="mb-4">
          <input className="bg-boneWhite shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"></input>
        </div>
      </form>
      <button className="bg-submitButton text-boneWhite hover:bg-blue-700 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Submit
      </button>
    </div>
  );
}

export default NewslettersForm;
