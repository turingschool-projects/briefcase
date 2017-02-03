class Seed
  def self.start
    seed = Seed.new
    seed.create_users
  end

  def create_users
    User.create({
      first_name: "Daniel",
      last_name: "Shin",
      bio: "Being around cars has taught me a great deal about what works and doesn't when it comes to performance. Many of those principles have proved valuable in developing software as well. I love new challenges and get a kick out of working with teams to produce the best product available. Life isn't worth living if its not lived to its fullest. ",
      title: "Software Developer",
      })

    User.create({
      first_name: "Anthony",
      last_name: "Ciccone",
      bio: "Being around cars has taught me a great deal about what works and doesn't when it comes to performance. Many of those principles have proved valuable in developing software as well. I love new challenges and get a kick out of working with teams to produce the best product available. Life isn't worth living if its not lived to its fullest. ",
      title: "Software Developer",
      })

    User.create({
      first_name: "Matt",
      last_name: "DeMarteau",
      bio: "Being around cars has taught me a great deal about what works and doesn't when it comes to performance. Many of those principles have proved valuable in developing software as well. I love new challenges and get a kick out of working with teams to produce the best product available. Life isn't worth living if its not lived to its fullest. ",
      title: "Software Developer",
      })
  end

  Seed.start
end
