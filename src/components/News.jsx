import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loding: false,
      page: 1,
    };
  }
  async componentDidMount() {
    try {
      let url =
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=862860c0bc5444468229092957eef7e5&pagesize=20";
      let data = await fetch(url);
      let parsedData = await data.json();
      this.setState({ articles: parsedData.articles });
    } catch (e) {
      console.log("somthing went wrong");
    }
  }
  render() {
    return (
      <>
        <div className="row container-fluid">
          {this.state.articles.map((element) => {
            return (
              <div
                className="col-sm-6 col-xs-12 col-md-4 col-lg-3"
                key={element.url}
              >
                <NewsItem
                  title={
                    element.title !== null
                      ? element.title.slice(0, 78) + "Braking news"
                      : ""
                  }
                  discription={
                    element.description !== null
                      ? element.description.slice(0, 110) + "read more..."
                      : "click on read more to read the full news artical"
                  }
                  url={element.url !== null ? element.url : ""}
                  imageUrl={
                    element.urlToImage !== null
                      ? element.urlToImage
                      : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAHoAqAMBEQACEQEDEQH/xAAcAAACAwEBAQEAAAAAAAAAAAACAwABBAUGBwj/xAA6EAABAwMDAgUDAgMFCQAAAAABAAIDBAURBhIhMVEHEyJBYXGBkRShMlKxFUKy0fAjM2JygpKiwfH/xAAaAQADAQEBAQAAAAAAAAAAAAAAAQIDBAUG/8QAMhEAAgIBAgMECAcBAQAAAAAAAAECEQMEIRIxQQUTUaEUFVJhcYGR8AYWIjJCwfEjJP/aAAwDAQACEQMRAD8A+ILpJIgCwFSQFgLVIQYC0SJCAWiQgg1VQrDDEybCDUE2XsTCy9qBWVsQOwS1A7BLUirAIKTQyiFDiUARhZtDBIWTQwVm0MiQEQBEARNIAwO61SEEAtUiQgFqkKw2tVEjWtTIbDEZ7IJsaYS1rXOxh3ygmyg1AWXtQKyi1A7ALEDTBc1BSYtzUi0xZCCkwSs2iiNi3Zy4Mw0n1e/ws2h2KIWMkUCswIgCIAsLSKAeGsMWfV5meO2P81tFEsrqtYolhtCsk0QkxvDmgEjuMhBD3GN5HP7cJkNhtjz0P5QS2MbGeQRwmTZNnwiibDbEXNcRjDRk5KKCxZZ8IoLBLEFWA5vwkUmAWf6KC0xTmgfKRaYvDnHDQSezeUmWmLcMcA5WbRQBCykhgELGSKKUgRNAG0ZK2SEMzk57LaKJY0Rkx+aB6c4PPutES3vQ2A7XElrTkY5CpIzkzQ2NvUcj5WiS6mUmxrIs+yainuZuVD2Rj2VpJGTkMLMNzhKSJUtwHl0jtzsZ+iyKsgbwfogLB2ZQOwCzuP3QUmDI7IaA1rcDHA6pFp0Jdz1Qq6lpiX5HZJlpiw57Hb2ucCBwcpGi3EvAHI6FSy0LKyaKAKxkhoFZDLAVxQMYwHnC2iSGAAOeVrEQ/a4cOBBx0IWyRm2Mjb3VUZNmqKPd6cgD5TptGbkMjy1wznCSbT3IlyNsbAOTyPhbHM2XIAG/5qZ8hRdsXjI4HQewWRZbGl2cDoEAU5hb14TaoSlYOzLTjhyEVYt0RPVOmy1JFGPYOW9RxkeypRRSkZpWZQ43yNIyMr2kD6rNxaNlISRjII69FMkaRYpyxkWAVjIpAFYsZYVxBmhr/wDZtaGtBGcn3K6YIzZbT9PsuiMUJs0NJc7L3Ek+5OVdIyZvgo3PY12eT0GFwZtfjxZHBpuj09P2Rlz41kUkrNxtVRBE581NM1p43uic0NP3WEu1cfss1XYGSbpZYjI7bPO0uhgmkAOHFsZIz2491Mu1oP8Agyvy1kXPLFfUcKabzDEGyCbONuz1Z7Y6pvtmHsMF+EsrV99GvmNFnrDkvpak/PkuUeucfWDK/Kc3ss8BEdC+RwbEXOc7gNa3JP2U+usfsM6H+C86VvNGvgwxSGFzg9zg8HkFvRNdt4l/B+QP8EamStZo18GHNRyR481sjMjI3MxkdxlX67x9YPyMV+DMz/bmi/qE6gqQQDT1G7buA8o5x3+ifrnF7DMvyll59/HzM76STyhMWSiM8CTZ6T9+ifrnHz4H5D/KmZPheWN/MS+jldF5ux/lZx5mz057ZT9cY/ZfkJ/hnLF08sfMXDaaqsc4UkE05b/EIYnPx9cJrtbH7LFLsCeP92WKMstA9pLXO2uaSHNLSCD2IT9bY/ZY/UeRK+NGCqi8h5aSCcZ+i7cGZZ4cdUjh1GnennwN2Y3DJTmkYi3DsuWZYBGFgyiBWgY1i3iyGMaOefwtoslmmI5IDR1WyaqzJ89j22hrf/aOqrTS4y0VDZH/APKz1H+mPuvlpvvMt+LPssn/AJ9I14Kv6Prrqy5x12oLjW3Cmr7NDC8R26lc2Vw9vVxx0OeT1PZVbTbb2PKUMbhjxxi4zb5vY49htl+h8P7TBpuZlPW1UzqmWRz2tyw5A6g542njssoxn3SUOZ258+meunLUK4pUvj92aY5ae8eIdsaJGTTWikca6pDdrZJAMfsTn8p7Syr3DcZ4OzZvksjXCvd/hzL9c9SU9PWVI1baJaYl22mp5mOkLSeGgbOeD3WOSWVJvjR6Gi0+inKGN6aal4tNK/HmZtH01Jpmig1FeGtM9TI2OhhPBDScOk/B4+PqowqONd5L5HV2nky6/I9Hp+Ud5P39I/X72M+srLu8Qv0jR6K+aN4A7POHfuHKc2P/ALcK6m/ZesrsnvPYTX05f0en1pDSWuvOoblT/rfLDae30w/3bXAEl0h+ucD4/HTmSjLje/geD2ZPJqMXoeJ8N25Pq7fJfL78eJp+6Vk1l1Tqa4TF9SYf00Lj0aT/AHWj2AJbwohJuM8j+B263T4oZ9Po8a/TfE/f97nom26lqNKU+jnANrHWwVUftiTdn/Ef3K24Vwd31o8l55x1T1v8eKvl/hxY7Gayw6S0zKXxfq3vrqvHDg0AnH19QH/xJQuMYfM6J6nhz59St6/Svv5GAalv1bd5LLoSnipKSk3eXDHGzL2tIBc4v7k/XlCnJuoA9Lghj73VO5Pqea1/VXaqvcf9vUdPSVrKdjXNhx6xz6nEE8k549glNtvc20kMSx/8nab6nz6tduqHn2yvodPHgxxR8xq8neZ5SXiIDm7HAtBOQQc9FcmYoUCdwwAPssJFATPdJI57zlxOSVjIpciMIDgSMgHkd1SENLg5xLRsBP8ACOgW0SS2g/UfC2RLNtE3dM0HupzT4cMmuZrpManqIJ8rPf8Ah9fLfp++yXC5NmLf07o4vKaCQ5xHPXsD+V89BOL5H02sxvPjUINczpS6msdpttwptK0tZ+quLdk9VWPHpbznAHU8nt198YSl+lPhT3Hj02TLOL1ElUeSQN41TR1F+0/Pb2zR0FpZCwNI2uO1wLsAdwAFE23KLS5HRptLw4MsZyXFO+v0O5bNSWg3zUNwNPcXwXJrI2GCH1NG3D+c8HOEKcVOTae5nk0WaWDDjUo3C3z+hzZaTSYqKQ01DehG2YOnEkedzAD6QPk4+2Vi1itUmejDL2g4y4pwtran18fpZtrNdahfVS/oKNsNIDiGJ1JuLWjgcolqcl7bL4Bg7C0PAu9lcur4uptk1HRVd+sl4rKGu/UUlO5tRspzgvxxj4BLlXfRlOM2nsc67NzYtLm02OceGTtb9P8AEjn2rUJkhu1v1BQVk1vrpHzRhkRLoXl2eP2P1HylDLalGa2ZrqtAoyxZdLNKcElz5pKjE2vgh0pTWRtJWP33AT1jzTkB8YPt84DfwhSSxqHv3HPDKWslqXJbRqO/J/dl3PUdXLr2K/0lHVinhdGxjHQuDjEG4ePvl37KnkfecaRhi0eOOhennJW7fPr0/obqLWkzdZ0l+oaWobTU0IgEVQ0xiQHcXD3wTn9gtHkbycUUcuDQwWkeDJJW3ez+hJr5oVla68Q2+6Gtc7zDSiTZHvznkg9M/b49lf6btRZj3Ws4e6lONeOzPF6lvM97ulVdKoNZJKc7GnhoAwAM/AThGWSaVG3/AD0uCk/2pnkZdhjGM784Oeh7L6RpJ0j49X1M/ufnhZyLQB4BP2WMikLKxkUiBOIMY1bxIDaeVshMfG7GM8pp0ZyNrC3ycteN5ONp9h3WvG2tjBrcLLjwTn6JW+RDSHROwR0PPQpEM/QPh35OnvDeK4VuWs8uWtmLf5eSOv8Awhq8nUyvK/cejgjUEdGl15aKnRcurGNqRQRB26NzW+aCHbcY3YznHv7rnNhV519R2qvpLf8A2TeK2tqaUVX6eip2yviYePUNwxz2yPlAqEv8Q6WC2T3CtsN/ooYpYoQ2rpWRukc84G0F/OMc/VA6N931ra7TqW3aembUSV9fjYImtLYwTgF+XAjPPQHogAazXNooq+601R57Y7XGx1TU7AYw95G2JuDuc856AfdAGS1+IdFXXyktFTaLzbKita51M64UojbLgZwMOJzj/XRAHlPHe4Zda7W13ID6l4z/ANLT/iXo9nrnI49U9kj4/M9rGEEEk9CvRlOjmjEwSHKxdnRES4+k/VI1QvI3DPVRIpAzMdG4xuGHN6hYyKTsSVhIpEaqiDDaVsiRgWyZLGMKohocwpmbRqhyXY6BXHdmUjfBEah8dPC0ebI4MZx1JOAqkklZkt3R918S2Gj0TQ6coi5stxnp7dFjk7cjd9trTn6r59u3Z6yVKjwNXbJbXq9/h3SxYtlxu1PXs9x5AaS9v/gP+xIZ1IKiO8a81NdRrCOw+RM2ghH+zLpGsGHcP6DcOo65KAOj4lTi3eHFvnqLs+9Rm6QyGr9AMrQXOwNvH93CAODqF1RYaKyaxu1K6S73K6mrfCBlzGCJwhiHwBj8lAHYrLZZbZp626Z1bU1FNcr9O+vqLgxzWNjqevqce2Q0D+mUAbNA1l1Otqu0S32LUlro6QSCvMLd0EhOAwPGckgHPJ6eyAPB+LlxFfruua0+mlaymBz/ACjJ/dzl6ulXDjXvOLO7lR4l7i7hx4C6t2zNGZ/BOfopZqkL2gtk3PDcDIB9/gKWaCSe3Hys5FoW4k9TlYyKFlYMZAnEAwtoskYOcLaLEPje1rS0sBJP8R9loQ0MaRkAkj7IIaHscA7g5H9VUXTMpI7+kaqhpNSW2qucjo6OnnEshDS4+nkDA68gKsylLG1HmyIUpJyPtNR4kaHqZYJqmUyy07t0L5KJzjG7u0kcH5C8l6PMunmdvpGPxBf4jaEkro697g6sjZsZUGhcZGt7B23IHPRL0XL4eYd/j8Tnu1P4WyOJdbKFznEkk2kEknqf4UeiZfDzF6Rj8TbJrfw/qKCKhlhhkooSDFTvt5MbCOmG7cDqfymtHmfTzE9TjXUbXeIOha3yTXltR5Egkh86ic/y3jo5uRwfkJvR5lzXmC1ON9Rd08QNA3SEQ3UNq4mncGVFA6QA9wC3qk9JlXTzKWeD6kofEjQdtgFPbnilhByIoKF0bc/QNwl6Ll8B99A+C3etdcLnV1rz6qid8p4/mcT/AO16cVUUjle7bRikdkAg8+47Kt2NIS7nqVXB1LQp5JHyFE7RohJKwbKAKxkykCsWMiEAbeei1ixMMHHAK2ixBD4WqZLGsd7HoqIaGgkHlMho2RTmNpHHqGDkLbkjBxtlF+45B47LNysOEIPzwfskJotr8EH5QKhrJsHacADjKuDpkyiBLLnp0RKVhGNAPlJAB9lFlpUJc5BaQpzki0hZdgpxdMqgQHSF2wZ2jcefZV3haVCifYrPJJUWkLfwVzNlCysZMpFKAIOvKBjX+Wx2GPLh3xjKpMRQI+fytUxBgj2AWqZIQcRzwPstUyWNEr3NawuJa3oCendUuZLiML8lVN7mdBNepFQwP/KCaC3FAqLc7LigKKLsD5QFFSbWn0v3NwOcYQVQpx+QgpIqRobj1tJIzge3wgpIQ488Yz3yEi6Kka5jWl398ZHOeFLZSEuKybGEzEmWlzWkDILj1+Fk2MQVkyiJARAEQBYK0TBhgrRMkMFapiLBwtExUGHJ3ZNBhyCaC3Jk0G1/t7ICg5SGEYcHZAPHtwglKxRf8oHRW/5QVRA9mHF5IIHpwOpSHQkuQXQOVLYwSVm2MAlZNlA5WUmMpSBEARAEQBEIAgVomIsErVMQYKtMRYKviFReVVioIOTFRe5AqJuQFE3ICgS5BVFZSbHRRUNjBJUNjBcVm2MElZtjKUARAEQBEARAEQBaaAsLRCLWiEEqQglYFqkJlKgLQIpJjLUsZSTAErNjBUsAVkykUoAiAIgCIA//2Q=="
                  }
                />
              </div>
            );
          })}
        </div>
        <div className=" d-flex justify-content-between">
          <button
            type="button"
            class="btn btn-light px-2 m-4"
            disabled={this.page <= 1}
          >
            {" "}
            ← Prev
          </button>
          <button type="button" class="btn btn-light px-2 m-4" disabled={true}>
            Next →{" "}
          </button>
        </div>
      </>
    );
  }
}
