<template>
  <div class="min-h-screen w-full bg-light-background dark:bg-dark-background">

    <div class="flex flex-col lg:flex-row min-h-screen">
      <!-- Left Sidebar -->
      <div
        class="lg:basis-1/3 bg-light-sidebar dark:bg-dark-sidebar px-8 py-16 lg:px-16 lg:py-32 flex flex-col lg:sticky top-0 lg:h-screen h-auto">
        <div class="bg-light-sidebar dark:bg-dark-sidebar flex flex-col h-full space-y-10">
          <div class="flex justify-center lg:justify-end">
            <div class="rounded-full overflow-hidden w-24 h-24 sm:w-32 sm:h-32 lg:w-48 lg:h-48">
              <img src="~/assets/img/profile-pic-lightBG.png" alt="Example Image" class="w-full h-full object-cover">
            </div>
          </div>
          <div class="flex flex-col text-base sm:text-lg lg:text-xl leading-loose text-center lg:text-right">
            <div class="flex flex-row justify-center lg:justify-end">
              <span class="text-light-text dark:text-dark-text">I am&nbsp;</span>
              <span class="font-bold text-light-accent">Jade</span>
              <span class="text-light-text dark:text-dark-text">, a web developer</span>
            </div>
            <div class="text-light-text dark:text-dark-text">specializing in backend development,</div>
            <div class="text-light-text dark:text-dark-text">passionate about crafting innovative</div>
            <div class="text-light-text dark:text-dark-text">digital solutions.</div>
          </div>


          <div class="text-base sm:text-lg lg:text-xl leading-loose text-center lg:text-right space-y-4">
            <div class="font-bold text-light-accent">Tech Stack</div>
            <div class="flex flex-wrap justify-center items-center lg:justify-end gap-2">
              <!-- Tech Stack Icons -->
              <i class="text-light-text dark:text-dark-text fab fa-php fa-2x"></i>
              <i class="text-light-text dark:text-dark-text fab fa-laravel fa-2x"></i>
              <i class="text-light-text dark:text-dark-text fab fa-aws fa-2x"></i>
              <i class="text-light-text dark:text-dark-text fas fa-database fa-2x"></i>
              <i class="text-light-text dark:text-dark-text fab fa-html5 fa-2x"></i>
              <i class="text-light-text dark:text-dark-text fab fa-css3 fa-2x"></i>
              <i class="text-light-text dark:text-dark-text fab fa-sass fa-2x"></i>
              <i class="text-light-text dark:text-dark-text fab fa-bootstrap fa-2x"></i>
              <i class="text-light-text dark:text-dark-text fab fa-vuejs fa-2x"></i>
              <i class="text-light-text dark:text-dark-text fab fa-angular fa-2x"></i>
              <i class="text-light-text dark:text-dark-text fab fa-react fa-2x"></i>
              <i class="text-light-text dark:text-dark-text fab fa-flutter fa-2x"></i>
              <span class="text-light-text dark:text-dark-text text-xl">Tailwind</span>
              <span class="text-light-text dark:text-dark-text text-xl">GIT</span>
              <span class="text-light-text dark:text-dark-text text-xl">Firebase</span>
            </div>
          </div>

          <div class="flex justify-center lg:justify-end">
            <!-- Download CV Button -->
            <a href="/pdf/Bryan_Jade_CV.pdf" download
              class="bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
              Download My CV
            </a>
          </div>
        </div>
        <div class="h-24 sm:h-32 lg:h-48 mt-5 flex flex justify-center lg:justify-end">

          <div class="flex items-center justify-center h-full space-x-4 sm:space-x-6">
            <a href="https://github.com/JadeLoplop" target="_blank"
              class="text-light-text dark:text-light-accent hover:text-gray-700 dark:hover:text-gray-400">
              <i class="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/bryan-jade-loplop-8721a21a0" target="_blank"
              class="text-light-text dark:text-light-accent hover:text-gray-700 dark:hover:text-gray-400">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
          </div>
        </div>
      </div>


      <!-- Main Content -->
      <div
        class="lg:basis-2/3 bg-light-background dark:bg-dark-background px-8 py-16 lg:px-16 lg:py-32 xl:px-16 overflow-y-auto">
        <button @click="toggleDarkMode"
          class="fixed top-4 right-4 p-2 bg-gray-200 dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center">
          <Transition name="fade" @before-enter="beforeEnter" @enter="enter" @leave="leave">
            <component :is="icon" class="w-6 h-6 text-gray-900 dark:text-gray-200 transition-opacity duration-500" />
          </Transition>
        </button>
        <div
          class="flex flex-col justify-start sm:justify-center space-y-10 lg:space-y-20 lg:max-w-3xl text-light-text dark:text-dark-text">
          <!-- About Me Section -->
          <div class="flex flex-col space-y-4 lg:space-y-10">
            <div class="text-3xl lg:text-4xl font-bold">About Me</div>
            <p class="text-sm lg:text-base">
              I’m <span class="font-bold text-light-accent dark:text-light-accent">Jade</span>, a web developer with a
              passion for <span class="font-bold text-light-accent dark:text-light-accent">innovation</span> and a knack
              for creating exceptional digital experiences. Specializing in <span
                class="font-bold text-light-accent dark:text-light-accent">backend development</span>, I excel at
              turning complex ideas into sleek, high-performing websites. My expertise extends to <span
                class="font-bold text-light-accent dark:text-light-accent">front-end</span> development as well,
              allowing me to deliver comprehensive solutions. My focus is on <span
                class="font-bold text-light-accent dark:text-light-accent">pushing boundaries</span> and delivering
              impactful results, from optimizing site speed to crafting intuitive user interfaces and exploring the
              latest tech trends.
            </p>

            <p class="text-sm lg:text-base">
              Outside of work, I enjoy reading <span
                class="font-bold text-light-accent dark:text-light-accent">manhwa</span> and <span
                class="font-bold text-light-accent dark:text-light-accent">manga</span>, drawing (a childhood dream of
              becoming a <span class="font-bold text-light-accent dark:text-light-accent">mangaka</span>), and playing
              <span class="font-bold text-light-accent dark:text-light-accent">volleyball</span> and <span
                class="font-bold text-light-accent dark:text-light-accent">basketball</span>. For entertainment, I’m a
              fan of <span class="font-bold text-light-accent dark:text-light-accent">anime</span>, <span
                class="font-bold text-light-accent dark:text-light-accent">zombie films</span>, <span
                class="font-bold text-light-accent dark:text-light-accent">suspenseful thrillers</span>, and the <span
                class="font-bold text-light-accent dark:text-light-accent">Alien vs. Predator</span> franchise.
            </p>
          </div>




          <!-- Divider -->
          <div class="flex-grow border-t border-light-sidebar dark:border-dark-sidebar"></div>

          <!-- Recent Work Section -->
          <div class="flex flex-col space-y-4 lg:space-y-10">
            <div class="text-3xl lg:text-4xl">Recent Work</div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div v-for="(work, index) in recentWorks" :key="index"
                class="rounded overflow-hidden bg-light-sidebar dark:bg-dark-sidebar cursor-pointer"
                @click="openWorkModal(work)">
                <img :src="work.imageUrl" alt="Card Image" class="w-full h-48 object-cover">
                <div class="p-4">
                  <div class="font-bold text-lg sm:text-xl mb-2 text-light-accent dark:text-light-accent">{{ work.title
                    }}</div>
                  <p class="text-light-text dark:text-dark-text text-sm sm:text-base">{{ work.description }}</p>
                </div>
              </div>
            </div>




            <div class="flex justify-center lg:justify-start mt-6">
              <a href="https://github.com/JadeLoplop" target="_blank"
                class="bg-light-accent dark:bg-light-accent hover:bg-dark-sidebar text-white font-bold py-3 px-6 rounded transition-colors duration-300">
                Check My GitHub
              </a>
            </div>
          </div>

          <!-- Divider -->
          <div class="flex-grow border-t border-light-sidebar dark:border-dark-sidebar"></div>

          <!-- Recent Work Section -->
          <div class="flex flex-col space-y-4 lg:space-y-10">
            <h2 class="text-3xl lg:text-4xl font-bold text-light-accent dark:text-light-accent">
              Projects I've Contributed To
            </h2>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div v-for="(work, index) in visibleWorks" :key="index"
                class="rounded-lg overflow-hidden bg-light-sidebar dark:bg-dark-sidebar shadow-lg cursor-pointer"
                @click="openWorkModal(work)">
                <img :src="work.imageUrl" alt="Card Image" class="w-full h-48 object-cover">
                <div class="p-4">
                  <h3 class="font-bold text-lg sm:text-xl mb-2 text-light-accent dark:text-light-accent">
                    {{ work.title }}
                  </h3>
                  <!-- <p class="text-light-text dark:text-dark-text text-base mb-2">
        {{ work.description }}
      </p> -->
                  <p class="text-light-text dark:text-dark-text text-sm sm:text-base">
                    <strong>Date:&nbsp;</strong> {{ work.time }}
                  </p>
                  <p class="text-light-text dark:text-dark-text text-sm sm:text-base">
                    <strong>Client:&nbsp;</strong> {{ work.client.name }}
                  </p>
                  <p class="text-light-text dark:text-dark-text text-sm sm:text-base">
                    <strong>Services:&nbsp;</strong> {{ work.client.services }}
                  </p>
                  <p class="text-light-text dark:text-dark-text text-sm sm:text-base">
                    <strong>Website:&nbsp;</strong>
                    <a :href="work.client.website" class="text-blue-500 hover:underline" target="_blank">
                      {{ work.client.website }}
                    </a>
                  </p>
                </div>
              </div>
            </div>


            <div class="flex justify-center lg:justify-start mt-6">
              <button @click="toggleShowMore"
                class="bg-light-accent dark:bg-light-accent hover:bg-dark-sidebar text-white font-bold py-3 px-6 rounded transition-colors duration-300">
                {{ buttonText }}
              </button>
            </div>
          </div>


          <div class="flex-grow border-t border-light-sidebar dark:border-dark-sidebar"></div>

          <!-- Get In Touch Section -->
          <div class="flex flex-col space-y-6 lg:space-y-12">
            <!-- Heading -->
            <div class="text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200 text-center">
              Let's Connect!
            </div>

            <!-- Email Section -->
            <div class="flex flex-col items-center space-y-4">
              <a href="mailto:bryanjadeloplop@gmail.com"
                class="text-light-accent dark:text-light-accent transition-colors duration-300 text-2xl font-bold transform hover:scale-105">
                bryanjadeloplop@gmail.com
              </a>
            </div>

            <!-- Call-to-Action Button -->
            <div class="flex justify-center space-x-4">
              <a href="mailto:bryanjadeloplop@gmail.com"
                class="bg-light-accent dark:bg-light-accent text-white font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                Send Me an Email
              </a>

              <!-- Download CV Button -->
              <a href="/pdf/Bryan_Jade_CV.pdf" download
                class="bg-gray-800 dark:bg-gray-300 text-white dark:text-gray-800 font-bold py-3 px-6 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
                Download My CV
              </a>
            </div>
          </div>




        </div>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <ModalComponent ref="workModal">
    <div class="text-light-text dark:text-dark-text">
      <h2 class="text-2xl font-bold mb-4">{{ selectedWork.title }}</h2>
      <img :src="selectedWork.imageUrl" alt="Work Image" class="w-full mb-4">
      <p class="mb-4">{{ selectedWork.description }}</p>
      <a :href="selectedWork.repoLink" target="_blank"
        class="flex items-center text-dark-accent hover:text-blue-800 dark:text-dark-accent dark:hover:text-blue-300">
        <i class="fab fa-github mr-2"></i>
        View on GitHub
      </a>
    </div>
  </ModalComponent>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import { SunIcon, MoonIcon } from '@heroicons/vue/24/outline';
import ModalComponent from '~/components/ModalComponent.vue';
import '@fortawesome/fontawesome-free/css/all.min.css';

// Reactive state for dark mode
const darkMode = ref(false);

// Compute icon based on dark mode state
const icon = computed(() => (darkMode.value ? MoonIcon : SunIcon));

// Toggle dark mode
const toggleDarkMode = () => {
  darkMode.value = !darkMode.value;
  const isDarkMode = darkMode.value;
  document.documentElement.classList.toggle('dark', isDarkMode);
  localStorage.setItem('darkMode', isDarkMode);
};

// Handle transition effects
const beforeEnter = (el) => {
  el.style.opacity = 0;
};
const enter = (el, done) => {
  el.offsetWidth; // trigger reflow
  el.style.transition = 'opacity 0.5s';
  el.style.opacity = 1;
  done();
};
const leave = (el, done) => {
  el.style.transition = 'opacity 0.5s';
  el.style.opacity = 0;
  done();
};

const recentWorks = [
  {
    title: "Api Base Project - Import User",
    description: "The application is built using Laravel and demonstrates how to import, store, and retrieve customer data from a third-party API.",
    imageUrl: "/img/postman.jpg",
    repoLink: "https://github.com/JadeLoplop/flexisource_codingchallenge"
  },
  {
    title: "Nymos Chat",
    description: "Connect with peers in real-time through an interactive, web-based chat platform designed for seamless and intuitive communication.",
    imageUrl: "/img/chat.jpg",
    repoLink: "https://github.com/JadeLoplop/Nymos-chat"
  },
  {
    title: "Dog Catalog",
    description: "This web application allows users to explore different dog breeds, choose their favorites, and connect with other users who share their passion for dogs.",
    imageUrl: "/img/dog_img.jpg",
    repoLink: "https://github.com/JadeLoplop/DogCatalog"
  },
  {
    title: "Dishtansya",
    description: "An API-based ordering system that streamlines food ordering and management processes. It provides a robust, scalable platform for integrating order functionalities, making it easy for restaurants and food services to handle and track orders efficiently.",
    imageUrl: "/img/dishtansya.jpg",
    repoLink: "https://github.com/JadeLoplop/dishtansya"
  },
  {
    title: "Paradahan",
    description: "An innovative web application designed for establishments to efficiently monitor and manage vehicle parking within their premises. This system provides real-time tracking of parked vehicles, enabling better space utilization and streamlined operations.",
    imageUrl: "/img/parking.jpg",
    repoLink: "https://github.com/C3ntr1/Paradahan"
  }
];

const contributedProjects = ref([
  {
    title: "SMS and LMS System",
    description: "A comprehensive web application developed for the Academy Portal to manage school and learning activities efficiently. This system integrates SMS and LMS tools for streamlined operations.",
    imageUrl: "/contributed/ap/1.png",
    time: "Aug, 2022",
    demo_link: "https://demo.academy-portal.com/",
    client: {
      name: "Academy Portal",
      services: "School management system and learning management system tool.",
      website: "https://demo.academy-portal.com/",
      phone: "n/a",
    }
  },
  {
    title: "Accounting Tool WebApp",
    description: "A specialized web application for Iberian Ventures, designed to support accountants in managing financial data and reports efficiently.",
    imageUrl: "/contributed/no_image.png",
    time: "November, 2021",
    demo_link: "https://ibventur.es/",
    client: {
      name: "Iberian Ventures",
      services: "Accounting Tool for accountants.",
      website: "https://ibventur.es/",
      phone: "n/a",
    }
  },
  {
    title: "S&N Pizza Website",
    description: "An eCommerce website for S&N Pizza, enabling customers to browse and order their favorite pizzas online with ease.",
    imageUrl: "/contributed/snr/1.png",
    time: "August, 2021",
    demo_link: "https://snrpizza.com/",
    client: {
      name: "S&N",
      services: "Ecommerce website.",
      website: "https://snrpizza.com/",
      phone: "n/a",
    }
  },
  {
    title: "Pregnancy Health Care App/Website",
    description: "A website and app developed for a local government unit (LGU) project, focused on providing healthcare resources and information to pregnant women.",
    imageUrl: "/contributed/phc/1.png",
    time: "Jan, 2021",
    demo_link: "https://pregnancy-healthcare.com/",
    client: {
      name: "S&N",
      services: "LGU project website.",
      website: "https://pregnancy-healthcare.com/",
      phone: "n/a",
    }
  },
  {
    title: "iVolunteer Website",
    description: "A platform created for iVolunteer, connecting volunteers with opportunities to help others in need.",
    imageUrl: "/contributed/ivolunteer/1.png",
    time: "April, 2021",
    demo_link: "https://www.ivolunteer.com.ph",
    client: {
      name: "iVolunteer",
      services: "Volunteer platform.",
      website: "https://www.ivolunteer.com.ph",
      phone: "n/a",
    }
  },
  {
    title: "Hisense Official Website",
    description: "The official website for Hisense, developed in collaboration with Xiklab Digital, focusing on digital marketing and brand presence.",
    imageUrl: "/contributed/hisense/1.png",
    time: "December, 2020",
    demo_link: "https://global.hisense.com",
    client: {
      name: "Xiklab Digital",
      services: "Digital marketing consultancy and execution.",
      website: "https://www.xiklab.com/",
      phone: "+632 87576 9071",
    }
  },
  {
    title: "Kolours Official Website",
    description: "Official website for Kolours, created to enhance the brand's online presence, managed by Xiklab Digital.",
    imageUrl: "/contributed/kolours/1.png",
    time: "September, 2020",
    demo_link: "http://kolours.ph",
    client: {
      name: "Xiklab Digital",
      services: "Digital marketing consultancy and execution.",
      website: "https://www.xiklab.com/",
      phone: "+632 87576 9071",
    }
  },
  {
    title: "Hygienix Official Website",
    description: "Developed for Hygienix, this website focuses on promoting their hygiene products, in collaboration with Xiklab Digital.",
    imageUrl: "/contributed/hygienix/1.png",
    time: "June, 2020",
    demo_link: "http://hygienix.ph",
    client: {
      name: "Xiklab Digital",
      services: "Digital marketing consultancy and execution.",
      website: "https://www.xiklab.com/",
      phone: "+632 87576 9071",
    }
  },
]);

const initialCount = ref(4);
const visibleCount = ref(initialCount.value);
const isExpanded = ref(false);

const visibleWorks = computed(() => {
  return contributedProjects.value.slice(0, visibleCount.value);
});

const buttonText = computed(() => {
  return isExpanded.value ? 'Show Less' : 'Show More';
});

const toggleShowMore = () => {
  if (isExpanded.value) {
    visibleCount.value = initialCount.value;
  } else {
    visibleCount.value = contributedProjects.value.length;
  }
  isExpanded.value = !isExpanded.value;
};

const selectedWork = ref({});
const workModal = ref(null);

const openWorkModal = (work) => {
  selectedWork.value = work;
  workModal.value.openModal();
};

// Initialize dark mode state on component mount
onMounted(() => {
  darkMode.value = localStorage.getItem('darkMode') === 'true';
  document.documentElement.classList.toggle('dark', darkMode.value);
});
</script>

<style scoped>
button,
a {
  cursor: pointer;
}
</style>