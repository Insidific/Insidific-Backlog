import { mount } from "@vue/test-utils";
import Vue from "vue";
import Backlog from "@/components/Backlog.vue";
import VueMaterial from "vue-material";

describe("Backlog.vue", () => {
  beforeAll(() => {
    Vue.use(VueMaterial);
  });

  it("Backlog to Match Snapshot", () => {
    const games = {
      Game1: {
        name: "Marvel's Spider-Man",
        developer: "Insomniac Games",
        description:
          "Starring the world’s most iconic Super Hero, Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for, while also introducing elements never-before-seen in a Spider-Man game. From traversing with parkour and utilizing the environment, to new combat and blockbuster set pieces, it’s Spider-Man unlike any you’ve played before.",
        image:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/xcrfutqlaa3q81m7blmh.jpg",
        completion: "incomplete"
      }
    };
    const wrapper = mount(Backlog, { propsData: { backLog: games } });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it("Backlog to Contain Backlog items, title, image, developer and description", () => {
    const games = {
      Game1: {
        name: "Marvel's Spider-Man",
        developer: "Insomniac Games",
        description:
          "Starring the world’s most iconic Super Hero, Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for, while also introducing elements never-before-seen in a Spider-Man game. From traversing with parkour and utilizing the environment, to new combat and blockbuster set pieces, it’s Spider-Man unlike any you’ve played before.",
        image:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/xcrfutqlaa3q81m7blmh.jpg",
        completion: "incomplete"
      }
    };
    const wrapper = mount(Backlog, { propsData: { backLog: games } });

    expect(wrapper.html()).toContain("<h1>Marvel's Spider-Man</h1>");
    expect(wrapper.html()).toContain('<img src="https://images.igdb.com/igdb/image/upload/t_cover_big/xcrfutqlaa3q81m7blmh.jpg" alt="Cover">');
    expect(wrapper.html()).toContain("<p>Starring the world’s most iconic Super Hero, Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for, while also introducing elements never-before-seen in a Spider-Man game. From traversing with parkour and utilizing the environment, to new combat and blockbuster set pieces, it’s Spider-Man unlike any you’ve played before.</p>");
    expect(wrapper.html()).toContain("<h3>Insomniac Games</h3>");
  });

  it("BacklogItem should have class with Complete", () => {
    const games = {
      Game1: {
        name: "Marvel's Spider-Man",
        developer: "Insomniac Games",
        description:
          "Starring the world’s most iconic Super Hero, Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for, while also introducing elements never-before-seen in a Spider-Man game. From traversing with parkour and utilizing the environment, to new combat and blockbuster set pieces, it’s Spider-Man unlike any you’ve played before.",
        image:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/xcrfutqlaa3q81m7blmh.jpg",
        completion: "incomplete"
      }
    };
    const wrapper = mount(Backlog, { propsData: { backLog: games } });

    expect(wrapper.contains(".incomplete")).toBe(true);
  });

  it("BacklogItem should have class with Complete", () => {
    const games = {
      Game1: {
        name: "Marvel's Spider-Man",
        developer: "Insomniac Games",
        description:
          "Starring the world’s most iconic Super Hero, Spider-Man features the acrobatic abilities, improvisation and web-slinging that the wall-crawler is famous for, while also introducing elements never-before-seen in a Spider-Man game. From traversing with parkour and utilizing the environment, to new combat and blockbuster set pieces, it’s Spider-Man unlike any you’ve played before.",
        image:
          "https://images.igdb.com/igdb/image/upload/t_cover_big/xcrfutqlaa3q81m7blmh.jpg",
        completion: "complete"
      }
    };
    const wrapper = mount(Backlog, { propsData: { backLog: games } });

    expect(wrapper.contains(".complete")).toBe(true);
  });
})