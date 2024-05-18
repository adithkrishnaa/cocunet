/* eslint-disable react/no-unescaped-entities */



const Testimonial = () => {
  return (
    <div>
      <section className="text-gray-600 body-font mb-10">
        {/* main  */}
        <div className="container xl:px-10 py-10 mx-auto">
          {/* Heading  */}
          <h1 className=" text-center font-noto text-3xl py-10 font-bold text-black">
            We are Available for Bulk orders
          </h1>
          {/* para  */}

          <div className="flex flex-wrap lg:flex-nowrap ">
            {/* Testimonial 1 */}
            <div className="md:w-1/2 lg:w-1/4 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center ">
                <img
                  alt="testimonial"
                  className="w-40 h-40 mb-8 object-cover inline-block  "
                  src="https://media.istockphoto.com/id/1135930582/photo/happy-birthday-to-you-concept.jpg?s=612x612&w=0&k=20&c=7oDUbjpae5Bt51I9lIiFTa28Fp4h0XHsUxvZ5bS0yX8="
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                />
                <h1 className="text-2xl  font-noto font-semibold py-2 text-green-600">
                  Personal Celebtations:
                </h1>
                <ul className="text-lg font-kantu  px-10 space-y-1 text-left">
                  <li className="list-disc">Anniversary Celebration</li>
                  <li className="list-disc">Baby Birth Celebration</li>
                  <li className="list-disc">Baby Shower Celebration</li>
                  <li className="list-disc">Birthday Party</li>
                  <li className="list-disc">Engagement Functions</li>
                </ul>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="md:w-1/2 lg:w-1/4 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-40 h-40 mb-8 object-cover inline-block  "
                  src="https://media.istockphoto.com/id/1529821833/photo/asian-multiethnic-business-people-talk-during-a-coffee-break-in-seminar-business-conference.jpg?s=612x612&w=0&k=20&c=BaiF3NAnWZLapl6ssFLKRejCjIW0R7f5Tz9s3DzHmlM="
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                />
                <h1 className="text-2xl font-noto font-semibold py-2 text-green-600">
                  Professional Events:
                </h1>
                <ul className="text-lg font-kantu px-14 space-y-1 text-left">
                  <li className="list-disc">Appreciation Ceremony</li>
                  <li className="list-disc">Award Ceremony</li>
                  <li className="list-disc">Board Meetings</li>
                  <li className="list-disc">Charity Events</li>
                  <li className="list-disc">Conferences</li>
                  <li className="list-disc">Corporate Events</li>
                  <li className="list-disc">Devotional Events </li>
                </ul>
              </div>
            </div>

            {/* Testimonial 3 */}

            <div className=" md:w-1/2 lg:w-1/4 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center">
                <img
                  alt="testimonial"
                  className="w-40 h-40 mb-8 object-cover   inline-block  "
                  src="https://media.istockphoto.com/id/638650658/photo/festival-fun.jpg?s=612x612&w=0&k=20&c=r3Zb611Q0FDChyt0Zj35sOUOXX8Yl6erINxb8OogPdI="
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                />
                <h1 className="text-2xl font-noto font-semibold py-2 text-green-600">
                  Public Events:
                </h1>
                <ul className="text-lg font-kantu px-20 space-y-1 text-left">
                  <li className="list-disc">Expos</li>
                  <li className="list-disc">Fashion Shows</li>
                  <li className="list-disc">Festival Parties</li>
                </ul>
              </div>
            </div>
            {/* Testimonial 4 */}

            <div className=" md:w-1/2 lg:w-1/4 lg:mb-0 mb-6 p-4">
              <div className="h-full text-center ">
                <img
                  alt="testimonial"
                  className="w-40 h-40 mb-8 object-cover inline-block "
                  src="https://media.istockphoto.com/id/1132784599/photo/enjoying-a-drink-at-book-club.jpg?s=612x612&w=0&k=20&c=zfOEUcbnu1Swn2xFxFH0Vj7kXceRL0stYkjbDRsI8Jk="
                  style={{
                    clipPath:
                      "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
                  }}
                />
                <h1 className="text-2xl font-noto font-semibold py-2 text-green-600">
                  Social Gathering events:
                </h1>
                <ul className="text-lg font-kantu px-10 space-y-1 text-left">
                  <li className="list-disc">Club Meetings</li>
                  <li className="list-disc">Cocktail and Mocktail Party</li>
                  <li className="list-disc">Class Fun</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <button  className=" border-2 font-inter  border-white text-white bg-green-400 hover:bg-green-800 transition duration-700 p-2 rounded-lg font-semibold">
              <a href="/service">See more</a>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
