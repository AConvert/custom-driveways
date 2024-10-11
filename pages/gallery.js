import Head from "next/head";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import Image from "next/image";
import { useRouter } from "next/router";
import { getProjectImages } from "@/lib/getProjectImages";

export default function Gallery({ images }) {
  const router = useRouter();
  return (
    <div className="bg-primary relative text-secondary min-h-screen">
      <Head>
        <title>Project Gallery - Custom Driveways</title>
        <meta
          name="description"
          content="Explore our gallery of custom concrete driveway projects. See our unique designs and quality craftsmanship."
        />
        <meta
          name="keywords"
          content="project gallery, custom driveways, concrete printing, driveway designs, driveway projects"
        />
      </Head>

      <div className="py-20 bg-primary text-black">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-3xl font-bold text-center">Gallery</h2>

          {/* Back button */}
          <div className="text-left mb-4 absolute z-10 top-2 left-2">
            <button
              onClick={() => router.back()}
              className="bg-third text-white text-xs md:text-lg px-1 py-1 rounded"
            >
              ← Back
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mt-8">
            {images.map(({ imageUrl, name }, index) => (
              <div key={index} className="bg-white p-2 rounded-lg">
                <Zoom>
                  <Image
                    src={imageUrl}
                    alt={name}
                    width={400}
                    height={300}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </Zoom>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const images = await getProjectImages();

  return {
    props: {
      images,
    },
  };
}
