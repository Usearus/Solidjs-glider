import { Component, createSignal, createUniqueId } from "solid-js";
import { FiTrash } from "solid-icons/fi";
import { AiOutlineMessage } from "solid-icons/ai";
import { FaRegularImage, FaRegularHeart } from "solid-icons/fa";
import MainLayout from "./components/layouts/Main";

type Glide = {
  content: string;
};

const App: Component = () => {
  //   React JS
  //   const [content, setContent] = useState("");
  const [content, setContent] = createSignal("");
  const [glides, setGlides] = createSignal<Glide[]>([]);

  const createGlide = () => {
    const glide = {
      id: createUniqueId(),
      content: content(),
      user: {
        nickName: "Filip99",
        avatar: "https://thrangra.sirv.com/1530451182374.jpeg",
      },
      likesCount: 0,
      subglidesCount: 0,
      date: new Date(),
    };
    setGlides([glide, ...glides()]);
    setContent("");

    console.log(JSON.stringify(glides()));
  };

  return (
    <MainLayout>
      {/* HOME PAGE START */}
      <div class="flex-it py-1 px-4 flex-row">
        <div class="flex-it mr-4">
          <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
            <img
              class="rounded-full"
              src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
            ></img>
          </div>
        </div>
        {/* MESSENGER START */}
        <div class="flex-it flex-grow">
          <div class="flex-it">
            <textarea
              value={content()}
              onInput={(event) => {
                setContent(event.currentTarget.value);
              }}
              name="content"
              rows="1"
              id="glide"
              class="bg-transparent resize-none overflow-hidden block !outline-none !border-none border-transparent focus:border-transparent focus:ring-0 text-gray-100 text-xl w-full p-0"
              placeholder={"What's new?"}
            />
          </div>
          <div class="flex-it mb-1 flex-row xs:justify-between items-center">
            <div class="flex-it mt-3 mr-3 cursor-pointer text-white hover:text-blue-400 transition">
              <div class="upload-btn-wrapper">
                <FaRegularImage class="cursor-pointer" size={18} />
                <input type="file" name="myfile" />
              </div>
            </div>
            <div class="flex-it w-32 mt-3 cursor-pointer">
              <button
                onClick={createGlide}
                type="button"
                class="
                            disabled:cursor-not-allowed disabled:bg-gray-400
                            bg-blue-400 hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-full flex-it transition duration-200"
              >
                <div class="flex-it flex-row text-sm font-bold text-white items-start justify-center">
                  <span>Glide It</span>
                </div>
              </button>
            </div>
          </div>
        </div>
        {/* MESSENGER END */}
      </div>
      <div class="h-px bg-gray-700 my-1" />
      {/* GLIDE POST START */}
      <div class="flex-it p-4 border-b-1 border-solid border-gray-700">
        <div class="flex-it flex-row">
          <div class="flex-it mr-4">
            <div class="w-12 h-12 overflow-visible cursor-pointer transition duration-200 hover:opacity-80">
              <img
                class="rounded-full"
                src="https://www.pinclipart.com/picdir/middle/133-1331433_free-user-avatar-icons-happy-flat-design-png.png"
              ></img>
            </div>
          </div>
          <article class="flex-it flex-grow flex-shrink cursor-pointer">
            <div class="flex-it justify-center flex-grow mb-1">
              <div class="flex-it justify-between flex-row w-full">
                <div>
                  <span class="font-bold">Filip99</span>
                  <span class="mx-2">&#8226;</span>
                  <span class="text-gray-400">2h</span>
                </div>
                <div class="text-gray-400 cursor-pointer transition hover:text-red-400">
                  <FiTrash size={16} />
                </div>
              </div>
            </div>
            <div class="flex-it flex-row flex-grow-0 items-center mb-2">
              <div class="flex-it mr-3 mb-3 w-full">My First Post</div>
            </div>
            <div class="flex-it flex-row flex-grow text-gray-400">
              <div class="flex-it flex-row items-center cursor-pointer mr-5 transition hover:text-blue-400">
                <AiOutlineMessage size={18} />
                <span class="text-xs ml-3">321</span>
              </div>
              <div class="flex-it flex-row items-center cursor-pointer transition hover:text-pink-400">
                <FaRegularHeart size={18} />
                <span class="text-xs ml-3">123</span>
              </div>
            </div>
          </article>
        </div>
      </div>
      {/* GLIDE POST END */}
      {/* HOME PAGE END */}
    </MainLayout>
  );
};

export default App;
