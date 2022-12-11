const Preloader = () => {
  return (
    <>
      <main
        style={{ width: "100vw", height: "100vh" }}
        className="bg-white d-flex justify-content-center align-items-center">
        <img
          className="inline-block w-25 h-25 animate-spin"
          src="https://i.ibb.co/xHC6Rxj/Simple-preloader.gif"
          alt="preloader_Image"
        />
      </main>
    </>
  );
};

export default Preloader;
