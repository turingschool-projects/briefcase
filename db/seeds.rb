class Seed
  def self.start
    seed = Seed.new
    seed.create_users
    seed.create_projects
  end

  def create_users
    User.create({
      first_name: "Daniel",
      last_name: "Shin",
      bio: "Being around cars has taught me a great deal about what works and doesn't when it comes to performance. Many of those principles have proved valuable in developing software as well. I love new challenges and get a kick out of working with teams to produce the best product available. Life isn't worth living if its not lived to its fullest. ",
      title: "Software Developer"
      })

    User.create({
      first_name: "Anthony",
      last_name: "Ciccone",
      bio: "Being around cars has taught me a great deal about what works and doesn't when it comes to performance. Many of those principles have proved valuable in developing software as well. I love new challenges and get a kick out of working with teams to produce the best product available. Life isn't worth living if its not lived to its fullest. ",
      title: "Software Developer"
      })

    User.create({
      first_name: "Matt",
      last_name: "DeMarteau",
      bio: "Being around cars has taught me a great deal about what works and doesn't when it comes to performance. Many of those principles have proved valuable in developing software as well. I love new challenges and get a kick out of working with teams to produce the best product available. Life isn't worth living if its not lived to its fullest. ",
      title: "Software Developer"
      })
  end

  def create_projects
    user = User.all.first
    user.projects.create({
      name: "Movie Keeper",
      github: 'www.github.com',
      code_climate_url: '',
      travis_ci_url: '',
      production_url: 'https://www.movies.example.com',
      screenshot: 'https://www.turing.io/sites/default/files/styles/project_screenshot/public/project_screenshots/my_movies.png?itok=GBGGw2wx',
      description: "Application that allows users to keep track of their movie collection and the format in which they own each individual movie. The project was built with React, CSS/SCSS, React Bootstrap, React YouTube, React Router 4, webpack, and Firebase. Movie information was acquired using The Movie Database API.",
      areas_of_focus: ''
      })
    user.projects.create({
      name: "Penny Wise",
      github: 'www.github.com',
      code_climate_url: '',
      travis_ci_url: '',
      production_url: 'https://www.pennywise.example.com',
      screenshot: "https://www.turing.io/sites/default/files/styles/project_screenshot/public/project_screenshots/Screen%20Shot%202017-01-31%20at%201.49.09%20PM_1.png?itok=KGnO0wSn",
      description: "PennyWise is a budget app. From the beginning, in the planning stage, we decided to build an app that the first-time budgeter could use and enjoy. We believe that people are primarily concerned with monthly income and expenses, which is why our app is focused on a monthly financial outlook. The world is full of budget apps that are overly complicated, which leads to people who try them and then delete them.",
      areas_of_focus: ''
      })
    user.projects.create({
      name: "Weather Forecast",
      github: 'www.github.com',
      code_climate_url: '',
      travis_ci_url: '',
      production_url: 'https://www.weather-forcast.example.com',
      screenshot: 'https://www.turing.io/sites/default/files/styles/project_screenshot/public/project_screenshots/screenshot.png?itok=5T0hYjb8',
      description: "The purpose of the application was to continue building our knowledge of APIs while also providing a foundational knowledge of React Router. A limitation to the project was to only allow the user to add four additional locations in addition to the user's current location (determined by using navigator.geolocation).",
      areas_of_focus: ''
      })
  end

  Seed.start
end
