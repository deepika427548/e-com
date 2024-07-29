import React from "react";
import Carousel from "react-bootstrap/Carousel";

const HomeBanner = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          src={
            "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBERERERERIRERERERERERERDxEREQ8RGBQZGRgUGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDszPy40NTEBDAwMEA8QHhISHjQrJCs0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAADAAMBAQEAAAAAAAAAAAAAAQIDBgcFBAj/xAA/EAACAQMBBgMEBwUHBQAAAAAAAQIDBBEFBhIhMUFRImFxEzKBkQcUQlJiocEjgrGy0SQzU2OS8PEWdJOis//EABsBAAIDAQEBAAAAAAAAAAAAAAECAAMEBQYH/8QAMhEAAgECBAIIBgEFAAAAAAAAAAECAxEEEiExQVEFEyJhcYHR8DJSkaGxwUIUIzOS4f/aAAwDAQACEQMRAD8A3lDQikfNludpjRaJRSNEUKUhoSKRekIxoYikWJAGAiixCgMQx0AYxDGAAAASAAwJYggGIhBANiAyCEyhMVoJDAYmV2GJYmUyWIwksTKZJU0MY2Sy2SzNNDohkspksqHROAGBAmRFIkpBjuIykUiUWjTERjKRKKRdEVjRQhosSAMAGWIVjBDAdAAYhjAGAAMAAACWIIBiAEBM8m82ks6TcXWjOa4OnSUq00+zUE8fHB5lXbOGcQt6zXR1J0aSfw3nL8i2GHqzXZi3757CucVuzaBGo/8AV9R8ram1/wB3x/8AmZY7XS4OVpUx/l1qU/ylujPA4hfwf29QdZDmbQxHh0Nq7STxOU6D7V6cqcV+/wAY/me1TqRnFShKM4vipRkpRfo0ZJwlB2mmvHQtTT2GxDJZSxhMkpksraGQiGUyWUyGRDJZUiTM9x0IAAAS0UiEWhoispFIlFI0REZSKRKGXoVlIolFFkQAhoSKHQrGhiGWIAwABgDAADYAABpG1m1sKcdynKW5KUqalTlirc1FwcKL+zFPhKp05R48S6jRnVllh/xeIJSUVdnr69tTRtd6EEqtWOd5b6hSpNYz7So+CfFeFZlxXDic21ra+ddtVKsqy/w6KlSto+WPen6yPgv6dWvGM67UUuFG3h4aNCL5pLq+8nxZ8cbKC7vySOhSVClrHtPm/wBLh+e8qanLfQxVNZm+EVux6RilGK+C4GB39Z/8Hp0tPqS/u6Ll5vP6H3U9nb2fu0ox/d/qWzxsVu0vFkVBmvK+uFylIz0tauofaeOzR7z2V1D7sf8AQj5K+h3sPfoKS8k0/wBRVj4PaS+oXQfJk221D5VaeV5Hs6ZqFPO/a1pUJ8G1B4jJ/ipvMZfE1erRiuFSEqb/ABLw/M+Wpayg1KDx1TTNCrRmss1o+eq9Ctwa1R17TNrcYp3kY02+CuIZ9g3+Nc6frxXmjalJNJrDT4primu5w7StoGsU663ovhl/qbfo+sTs8OLlVsZcZU1mU7VP7UO8Orh06dnzsX0Yms9D/X09PpyLadbhL6nQWIijWhOEZwkpwnFSjOLzGUWsppls4LNSIZLLZMimQ6MbEymQzNIcQAAoSkVElFJjRFKRaJQ0aIiloaJRSLkIykNElItQChkoaLEKUgEMdAGMQxgAAHyarfRtqNStJZ3I+GHJzm2owgvNyaXxGSbdkS9jXttdejRhOmnJQio/WHB4nLf/ALu3g+k5dWuMY8eqa0mOnzjOFzcJSr1oL2VKC4UKaeIQgukcZ+WepknGVes6lSW/ChObXavdykvaTx2T8EeyjwN10XTJTn9YrLNSSW7HpTh0ijViayoR/p6evzPm+S7lz/bFpQzPrJeXh6nkadsnKqlO4by+UVyijYLTZe2p/YTfme7CCRZhyyl8T8uBa58j5KNjTh7sIr0SM/s0uhYEUIrZAbbJ3URKlF80jIxAcU+BLs8y/wBFoVk1OEXnyWTRdc2JnS3p2r3o83RlxT9Ox0wmUcghKdN3g7d3D6B0fxH59u7LLkt1wnH3oS96P9UZtE1aVCahPjTbw8/ZOp7TbMU7hOpBblWPGMl18mcs1TT5RlKM47s4e9Hv+JeR2cHjVPR6Pl74e2Z6tLijfNndVVpVhSck7S5l+yeeFvXlh7vlCbfwfqb2cO0W8Uoytaz8E1uxb6cenodR2P1SVxbuFR5r20vYVm+c8LwVf3o4frky9LYVL+/DZ7+PPz/PexsPU/iz3mSy2QcGRrRDExshmaSHEADFGKRUSEUhoistFIlFGiIjKGhIZdEUpFEFFiYpQyUMsQCkAhodAGMWQyNcBRpG3moy9rb2kH4+NaSzx3m3TpcOuHvy/cRuxzJSdzrF1U5xp5hHycEoR/NzfxNNCeSTqfKm/PZfdoWUc1o82evoGkRzFY8FJKMc/amub+ZudKCSwfLp9soQjFdEfXUqRgt6cowiucpSUUvizHTTfaluWzfBFgY6VeE1mE4TXeE4yX5FlxWAmMQAiEMQjIAhsQrGJkartZs+q8PaU0lVgm08e93TNpJmslbbi1KO6GXJnAtQtXCW9FOMovl1jJdDZ9hNUkruDln9rF21Z48O+lv0Zt9+E4/E9zazZ9OXtYLwyaVRLtn3jTXP6vcVWljFOncRS4ZqUKkZRS+bO1QrLF0pUeLT8mtvvqZakOrkp952diYoTUkmuTSa9GNnmG7m6xDZLKZBRIdAAAKEaKJQ0FAZkRSITKNEWIyxoWQTLkxS0NEjTLEKWMlAixAKKJAdMUpFEDyMgGO5qbkJy+7Fy+SOcbESU724zzkpT+VTj/MbttFVcbapjrHHzOQ2+sztKlzVp53/AGdWjTf3JzUcS+DWfVIvoUnWjUjHkvzf9ElLJZv3obztNtlKnUdtaOClTe7WryipqM/8KCfBtdW+XLny1PV9Tr3EraVeq6u9Gait2MFBqWG8R4ZaceOOhqdO5bUI5fGWZNvLbcuLbNq1nRK9rK1qTy6UqkqcOPu1N3eax5rH+lnXoYNQs1wM0qt9D57TUJ2lzCcJOOJx3knhSi3xT7o7hCaklJcpJNejWTiO1lvubs12TOw6JV37W2n96hSfx3EZekKahKMlxHoyuj7siARzC4Mg2AhWwgxCYmI2MDEDEVsKMF5SU4Si+qa/I5RrFs4XdHK8M6dzBNv3koSb+GY/xOuVORy7bGt/aqUl4VRpXClwXJU5JvivxG7ol2xcUVYjWkze9Arb9pbT6yt6En6unE9BnlbOxcbW2g+caFGL9VTSPUbOLLdo1kskbJZQxkMBASwSkNMQJkAZEykY0WWxdxC0ykQhovixS0MlDyWJilpjTJAsQC8jIKQ6ANAwCTGAeDtXPFCS74OXapZxdreyS8UFa1vTfquEv5Wzpe08s05Lyz+Zzu9uYxt7qD51bSUPjTquUf5jp9Du85lOKXZRpT9zK7P5nZ/pDrxnptGpHH7O9tqnwnSqR/X8ji0JeDHmbdqmue0sI0ZN5l9VkvWC4t/N/M7kdmY2ehtRONS2hNY9xZ9cHRti62/p1pL/ACIx+MW4/ocpuLjftIpvLUcZ+B0T6M6u9plBfclWh8qkn+pzOlV2Iy7/AMpmihuzbgJyM4hqGIBMVkJZ8Go6zbW2FWqwpt8ottyx3wuJ5u1W0cbSHs6eJ3M14Ic1Bfel+iOR6tXqTnKdSTlOTbk28ts2YXAyrrM9F+SupVUdDu9tcwqwU6c4zhLlKLymWce2A1521fdqVNy1qJxm5KTgqn2GsLg+meWM+R1+Mk0mmmmspp5TXdGXFUHQqZW78n75FlOWdXCo+Byfa3E7qVNfb3aP/lqLefwjGR1O5qKMJSfJRb/I5FbVfrV/OpzhSk8dt5+GP/qpfNFvRvZqTq/LH7vRe+4FbVKPNnTdNfgj6I+0+LT1iK9D7DiS3ZrEwATECIBAQhRRKGAhSZaZjRSY8WKzIikzGMuTEaMiY0Qiky1MUtDJQ0WJgGMSHkdMBQpMQSY1wGubQPp3yvmuH54OSbRycJbvdTXwZ1faXO5lc1xXqjmO1tDfcJx5Saa9Gmbei5ZanjcXEK8TVKb4M+yM96m191Jr5pfqYLWg5Rk+zS+IodU+zPQ5t0YLHqqu1Rx5fM6Z9ElXNjUj9y5qY9HCD/qcmnU8G7hfqdP+h6X9muV2uIv501/QwdJ/4PNfsuofGdGQyUx5OAmaxHgbU7SQsoKEEqlzUX7Onzx0359l/H5mTaraGnp9D2ksTqzzGjTzxnPu+0Vzb+HU5lYV5TqTurme/Vm3Jyl08kui8uh0MFg+veeXwr7lNWrl0W56FSHsoTurmW/XqNuTl0b6GoXbqXDlUUJezjLdcsPd3sZ3c98Y+a7nv2dCpq104b/sraklO5rvjGjTzhY7ylyiv0TPs201WhSpU7a3iqdOEHG3orjuRb8Vab+1KTy8vm/Rs9CopKy0RictdTRFNqaXwx2XY7T9G9y6mnQUnn2dWrSWfuqWUvlI4bvvOep0PR9qI6bpdOnBKpd1pVasYPjGkpS3Yyqeqimo83nojmdJUpVYRjBXeb9M0UJKLbZsX0i7RK3pfVqbzcVljdjxcIPhl+b5I1/Ziw9moQfv+9Uf43zXwWF8DxdKt51Kk7u5cp1JPeTlxbm+v++XQ3TQKGXvPqc6so4ej1UXfi3zfokaaac5Zn5eBtdrHEUZ8mOksItnnm9TYNktgyWxSAAsgEhaY0yEUmAhQ0SmNEQDImUmY0yky6LFZkTGmQmNMsTFsWmUiExplqYpRWSBjJgKEwQmNwIeFr1PMH6HMdVnKKcMZSbcfw8zreo096LOfatpzcnwL8HNQk1IlRXRp1rNQzGSW7J5bxxT7jlYQ3pybWNyTjxx4t3gelcWLj0PLq2zyduM1J3TsZHGx88LOUmdb+jjTpULWTksOrVc+P3Ukk/4nNLCnNzisvmjsuh8KNNdoow9JVpWUPehbQgtWeumfPqN9TtqVSvVlu06cXKT6+SS6tvCS7szpnM/pS1SUqlO0jlQppVqi+/Ufup+SXH97yMOHpdbUUB5vKrmma3rNS9upV6vBvhCGcxpU17sF/Fvq2z5by9k0qcX+Z8M5vLZMJOPifV8s4l3yu3qerglGKjHRI57vfU2uOrwtbT2EYre3oy3N+Sl7X7VSWPDNNeHpu4WM5NSuLidScpzk5Tk8yk+pjrVZSk5Sbk28tt5bZ9el0aTlv13L2MOMoxeJ1X0pxfTPV9EPq9AaGaz07NN3NZuFBPdh0nc1F9mHkvtS6erwfXp9i6k9+aUVzUekUfRUnO6qRqTjGEYRUKNGKxTtqa92MV+vV5b4s+qUkv2cP33+hkr1v4Q+pbTp8WejbP2koxj7keC8/M3fR6G7FGs6HacmbraU8JHmcdVXwo6NJcT7IgxCbOUy4GyWymyGyEHkCADYhkTGmY0ykyELTKTMaZSYCGTI0zHkpMKYDImUmYkyky1MWxkQJkpjyWJgLyPJGR5HTFsWJsWQyNchjrRyjyq+nqTbweyyXEVoKZpuo6RnOEeBX0d55HSqlFM+OpYxfQup4idMDgmaNp2k4mnjqdB0+G7BLyPno2UU+R6FOOELUquo7sKiorQy5Od/SLaU5TjVTxNxUZrvjk/lw+B0Kb4HP8AbOm5stw0mq0bMSa7LOffUU6cp8224xXbHOT/AIHyztJye9Lhy4LkvTt6H2ThOEnutrPPsyJRk14mz0anJcTE4o8eUMt491PGe562n2TaUp8Me6u3mVRdKCjmOXHLUccHLu/99C5VZz4co9kPOpJqy0FjBJ3Z9UrhLwU/jL+h9+l2uWj5LG1y1wNt0qyxjgc3EVYwjZGmEbs9fSbbCR79NcD47WnhI+2J5yrPNK5sWiKyS2JsWSkI2yWwbJbDYg8gTkQbEKyUmY0xpksQyplJmJMpMFgmRMpMw5KTFIZkwTMakUmMmAyJlZMakGSxMFjKhpmPI0x0wGQMkZDI1wWMmQyQGQ3JYYNCyGQkDAwyLJCClyNb1uy30+BsbZ81xT3hczi7olrqxy+901pvgeZWs2dMutPjLoeTX0hPPA6dLHq2pTKic/8AqnHkfZbWbb5GxVNKw+R9Nrp+OhpnjFbQrVLU+fTbDGOBs9nb4RFra4PRhHBx69dzZpjGxkgjJkhBkxssKbJbE2JyJYgNktibJchrEHkCN4A2IUpDTACEKUisgApCkxqQAAhSkCYwAQeSkwAZEGpFbwgHFK3g3gAZEBMeQAJBZDeGBCC3g3gALIJyJbABeJDDOOTBOkgAQh89Sgn0JhQSABszsSx9EImRMAEYUPeJcgAlgkuQnIQBsQTkS5AAyQGRkYANYB//2Q=="
          }
          className="imgSize"
          alt=""
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={
            "https://cdn.shopify.com/s/files/1/2303/2711/files/2_e822dae0-14df-4cb8-b145-ea4dc0966b34.jpg?v=1617059123"
          }
          className="imgSize"
          alt=""
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src={
            "data:image/jpeg;base64,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"
          }
          className="imgSize"
          alt=""
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default HomeBanner;
