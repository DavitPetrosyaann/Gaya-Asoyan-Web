import { CaseStudy } from './types';

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs-dune",
    title: "The Ecology of Power",
    subtitle: "A Comparative Study of 'Dune'",
    theme: "Environmental Determinism & Messianic Archetypes",
    items: {
      book: {
        id: "dune-book",
        type: "book",
        title: "Dune",
        creator: "Frank Herbert",
        year: "1965",
        imageUrl: "https://picsum.photos/seed/dunebook/800/600",
        description: "A seminal science fiction novel set on the desert planet Arrakis, exploring complex themes of politics, religion, and ecology.",
        keyThemes: ["Ecological Scarcity", "Religious Manipulation", "Feudal Politics"],
        analysis: "Herbert's text relies heavily on internal monologues and detailed appendices to build a dense, lived-in universe. The desert is not merely a setting but an active antagonist and shaper of culture. The narrative structure subverts the traditional hero's journey by questioning the very nature of the messiah figure it creates."
      },
      "film-old": {
        id: "dune-1984",
        type: "film-old",
        title: "Dune",
        creator: "David Lynch",
        year: "1984",
        imageUrl: "https://picsum.photos/seed/dune1984/800/600",
        description: "A surrealist, highly stylized adaptation that condenses the novel's complex politics into a more traditional, albeit bizarre, cinematic narrative.",
        keyThemes: ["Grotesque Aesthetics", "Internal Monologue via Voiceover", "Literalized Metaphor"],
        analysis: "Lynch's adaptation struggles with the density of the source material, relying on heavy voiceover exposition. However, its visual language—characterized by industrial decay and baroque grotesquerie—offers a unique interpretation of the Harkonnen and Corrino empires, emphasizing the corruption of power through physical deformity."
      },
      "film-new": {
        id: "dune-2021",
        type: "film-new",
        title: "Dune: Part One & Two",
        creator: "Denis Villeneuve",
        year: "2021-2024",
        imageUrl: "https://picsum.photos/seed/dune2021/800/600",
        description: "A brutalist, atmospheric adaptation that prioritizes scale, sound design, and visual storytelling over exposition.",
        keyThemes: ["Brutalist Architecture", "Sensory Immersion", "Colonial Critique"],
        analysis: "Villeneuve strips away the internal monologues, relying on Hans Zimmer's oppressive score and Greig Fraser's cinematography to convey the psychological weight of Arrakis. The visual language uses brutalist scale to dwarf the human characters, perfectly capturing Herbert's theme of environmental determinism."
      },
      artwork: {
        id: "dune-art",
        type: "artwork",
        title: "The Great Day of His Wrath",
        creator: "John Martin",
        year: "1851",
        imageUrl: "https://picsum.photos/seed/johnmartin/800/600",
        description: "An apocalyptic landscape painting depicting the destruction of the world, characterized by overwhelming scale and sublime terror.",
        keyThemes: ["The Sublime", "Apocalyptic Scale", "Human Insignificance"],
        analysis: "Martin's painting visually echoes the thematic core of Dune: the overwhelming, destructive power of nature (or the universe) against fragile human constructs. The sublime terror evoked by the collapsing mountains mirrors the existential dread of the sandworms and the harsh reality of Arrakis, bridging 19th-century romanticism with 20th-century sci-fi."
      },
      synthesis: {
        id: "dune-synth",
        type: "synthesis",
        title: "Synthesis: The Desert as Crucible",
        creator: "Academic Review",
        year: "Present",
        imageUrl: "https://picsum.photos/seed/dunesynth/800/600",
        description: "Concluding thoughts on the intermedial translation of Arrakis.",
        keyThemes: ["Translation of Scale", "Evolution of the Hero", "Visualizing the Unseen"],
        analysis: "The transition from Herbert's text to Lynch's surrealism and finally to Villeneuve's brutalism demonstrates a shift in how we visualize 'the alien'. Where the book uses linguistic density, and Lynch uses visual eccentricity, Villeneuve aligns most closely with the sublime terror of Martin's artwork—using sheer scale and sensory overload to communicate the insignificance of the individual against the backdrop of ecological and political machinations."
      }
    }
  },
  {
    id: "cs-gatsby",
    title: "Illusions of Grandeur",
    subtitle: "A Comparative Study of 'The Great Gatsby'",
    theme: "The American Dream & Performative Identity",
    items: {
      book: {
        id: "gatsby-book",
        type: "book",
        title: "The Great Gatsby",
        creator: "F. Scott Fitzgerald",
        year: "1925",
        imageUrl: "https://picsum.photos/seed/gatsbybook/800/600",
        description: "A critique of the Jazz Age, exploring themes of decadence, idealism, and the hollow pursuit of the American Dream.",
        keyThemes: ["Unreliable Narration", "Symbolism (The Green Light)", "Class Stratification"],
        analysis: "Fitzgerald's prose is inherently lyrical and melancholic. The novel's power lies in Nick Carraway's biased, retrospective narration, which romanticizes Gatsby while simultaneously exposing the moral bankruptcy of the East Egg elite. The text is a study in the gap between perception and reality."
      },
      "film-old": {
        id: "gatsby-1974",
        type: "film-old",
        title: "The Great Gatsby",
        creator: "Jack Clayton",
        year: "1974",
        imageUrl: "https://picsum.photos/seed/gatsby1974/800/600",
        description: "A faithful, somewhat lethargic adaptation that focuses heavily on period-accurate aesthetics and romantic melodrama.",
        keyThemes: ["Nostalgic Realism", "Literal Translation", "Pacing"],
        analysis: "Clayton's film treats the source material with a reverence that borders on the academic. While visually sumptuous and historically accurate, it often fails to capture the frantic, desperate energy of the Jazz Age described in the book, resulting in a beautiful but emotionally distant tableau."
      },
      "film-new": {
        id: "gatsby-2013",
        type: "film-new",
        title: "The Great Gatsby",
        creator: "Baz Luhrmann",
        year: "2013",
        imageUrl: "https://picsum.photos/seed/gatsby2013/800/600",
        description: "A hyper-kinetic, anachronistic adaptation that uses modern music and frenetic editing to translate the feeling of the 1920s to a contemporary audience.",
        keyThemes: ["Anachronism", "Visual Excess", "Kinetic Editing"],
        analysis: "Luhrmann sacrifices literal fidelity for emotional resonance. By using hip-hop and hyper-saturated CGI, he attempts to make the modern viewer feel the same overwhelming, intoxicating shock of the new that the characters felt in 1922. It is a film about excess that is itself excessively made."
      },
      artwork: {
        id: "gatsby-art",
        type: "artwork",
        title: "Portrait of Marjorie Ferry",
        creator: "Tamara de Lempicka",
        year: "1932",
        imageUrl: "https://picsum.photos/seed/lempicka/800/600",
        description: "An Art Deco portrait characterized by polished, metallic surfaces, sharp geometry, and an aura of cold, untouchable glamour.",
        keyThemes: ["Art Deco Geometry", "Cold Glamour", "Constructed Identity"],
        analysis: "Lempicka's work perfectly encapsulates the 'Daisy Buchanan' archetype. The subject is rendered almost like a machine—flawless, hard-edged, and emotionally impenetrable. This visual style mirrors Fitzgerald's critique of the wealthy: beautiful on the surface, but lacking a soul or moral center beneath the polished veneer."
      },
      synthesis: {
        id: "gatsby-synth",
        type: "synthesis",
        title: "Synthesis: The Architecture of Illusion",
        creator: "Academic Review",
        year: "Present",
        imageUrl: "https://picsum.photos/seed/gatsbysynth/800/600",
        description: "Concluding thoughts on the visual representation of the American Dream.",
        keyThemes: ["Surface vs. Depth", "The Role of the Observer", "Temporal Translation"],
        analysis: "The challenge of adapting Gatsby lies in translating Nick's internal poetry into external visuals. Clayton attempts this through literal period recreation, resulting in a museum piece. Luhrmann succeeds better by adopting the ethos of Lempicka's art: he constructs a world of dazzling, aggressive artificiality. Both films, when viewed alongside Lempicka's cold portraits, highlight the novel's central thesis: the American Dream as a beautifully constructed, ultimately hollow performance."
      }
    }
  }
];