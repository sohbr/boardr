# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.destroy_all
u1 = User.create!(username: "Noob Boardr", password: "password")
u2 = User.create!(username: "Senpai Boardr", password: "password")

Photo.destroy_all
p1 = Photo.create!(
  title: "Lights On",
  description: "Flying high",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214031/snowboarding-wallpaper-hd-copy_rilzn8.jpg",
  owner_id: u1.id
  )
p2 = Photo.create!(
  title: "Snow",
  description: "So much snow.",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214079/toa-heftiba-78308_j3wsa9.jpg",
  owner_id: u1.id
)
p3 = Photo.create!(
  title: "View",
  description: "Beautiful.",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214079/william-hope-62551_h6lugl.jpg",
  owner_id: u1.id
)
p4 = Photo.create!(
  title: "Tricky",
  description: "Trying out some tricks.",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214074/TylerOrton_Slash_AGPhotographixweb_ready_on7ivr.jpg",
  owner_id: u1.id
)
p5 = Photo.create!(
  title: "Splash",
  description: "Surf's up.",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214072/wintersnowboardingsport1920x1080wallpaper4723_vy6iot.jpg",
  owner_id: u1.id
)
p6 = Photo.create!(
  title: "Splashies",
  description: "Don't get wet!",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214072/winter-season_00427602-copy_yvhtxs.jpg",
  owner_id: u1.id
)
p7 = Photo.create!(
  title: "Selfie",
  description: "Self centered shot",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214071/winter-878727_960_720_bbqkj3.jpg",
  owner_id: u1.id
)
p8 = Photo.create!(
  title: "Touchdown",
  description: "Look Ma, one hand!",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214070/versatile-newimage_deloox.jpg",
  owner_id: u1.id
)
p9 = Photo.create!(
  title: "Aerial",
  description: "This view will take your breath away.",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214069/toa-heftiba-153852_l3mm6g.jpg",
  owner_id: u1.id
)
p10 = Photo.create!(
  title: "Snowy Alps",
  description: "Can't wait to hit the slopes.",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214069/thomas-kelley-68770_yf95aa.jpg",
  owner_id: u1.id
)
p11 = Photo.create!(
  title: "One by One",
  description: "Here we come, one at a time.",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214069/toa-heftiba-189194_h7jqrw.jpg",
  owner_id: u1.id
)
p12 = Photo.create!(
  title: "Lonely Boardr",
  description: "Watch me go ... alone.",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214068/tomas-kodydek-7492_gcnsjo.jpg",
  owner_id: u1.id
)
p13 = Photo.create!(
  title: "From high up",
  description: "Looking down at all of this puts things in perspective.",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214062/toa-heftiba-189130_uhtk3y.jpg",
  owner_id: u1.id
)
p14 = Photo.create!(
  title: "Follow me",
  description: "Let it all go and follow my tracks.",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214059/sujitkun-khantayana-101683_hjvpka.jpg",
  owner_id: u1.id
)
p15 = Photo.create!(
  title: "Hanging",
  description: "A little scary but safe.",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214058/tim-vanderhoydonck-308612_lzn731.jpg",
  owner_id: u1.id
)
p16 = Photo.create!(
  title: "White",
  description: "I really should get a jacket that isn't white.",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214033/Snwoboarding-Down-the-Mountain-copy_d0xgmu.jpg",
  owner_id: u1.id
)
p17 = Photo.create!(
  title: "snow1",
  description: "so much snow",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214031/snowboarding-wallpaper-hd-copy_rilzn8.jpg",
  owner_id: u1.id
)
p18 = Photo.create!(
  title: "Progression",
  description: "20+ shots",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214033/sports-snowboarding-wallpaper-2-copy_kimzf7.jpg",
  owner_id: u1.id
)
p19 = Photo.create!(
  title: "Grab",
  description: "Whoops! Dropped my keys.",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214032/Sport-Wallpaper-snow-mountains-sky-snowboarding-jump-copy_xp0sw9.jpg",
  owner_id: u1.id
)
p20 = Photo.create!(
  title: "My world",
  description: "Welcome to my world.",
  img_url: "http://res.cloudinary.com/sohnbrian/image/upload/v1506214032/snowboarding-hd-6-747169-copy_oomxqe.jpg",
  owner_id: u1.id
)
