import { PrismaClient } from "@prisma/client";
const prisma= new PrismaClient();


async function main() {
  // Roles
  await prisma.role.createMany({
    data: [
      { role_name: 'Admin' },
      { role_name: 'User' },
      { role_name: 'Editor' },
      { role_name: 'Guest' },
      { role_name: 'SuperAdmin' },
      { role_name: 'Manager' },
    ],
  });

  // Users
  await prisma.user.createMany({
    data: [
      { username: 'john_doe', email: 'john@example.com', password: 'password123', dob: new Date('1990-01-01'), role_id: 1 },
      { username: 'jane_doe', email: 'jane@example.com', password: 'password123', dob: new Date('1992-02-02'), role_id: 2 },
      { username: 'alice', email: 'alice@example.com', password: 'password123', dob: new Date('1985-05-15'), role_id: 3 },
      { username: 'bob', email: 'bob@example.com', password: 'password123', dob: new Date('1987-03-03'), role_id: 4 },
      { username: 'charlie', email: 'charlie@example.com', password: 'password123', dob: new Date('1995-07-07'), role_id: 5 },
      { username: 'dave', email: 'dave@example.com', password: 'password123', dob: new Date('1993-06-06'), role_id: 6 },
      { username: 'eve', email: 'eve@example.com', password: 'password123', dob: new Date('1991-11-11'), role_id: 7 },
      { username: 'frank', email: 'frank@example.com', password: 'password123', dob: new Date('1989-09-09'), role_id: 8 },
      { username: 'grace', email: 'grace@example.com', password: 'password123', dob: new Date('1994-12-12'), role_id: 9 },
      { username: 'hannah', email: 'hannah@example.com', password: 'password123', dob: new Date('1986-04-04'), role_id: 10 },
    ],
  });

  // Blogs
  await prisma.blog.createMany({
    data: [
      { title: 'First Blog', content: 'Content of the first blog', author_id: 1, is_published: true },
      { title: 'Second Blog', content: 'Content of the second blog', author_id: 2, is_published: false },
      { title: 'Third Blog', content: 'Content of the third blog', author_id: 3, is_published: true },
      { title: 'Fourth Blog', content: 'Content of the fourth blog', author_id: 4, is_published: false },
      { title: 'Fifth Blog', content: 'Content of the fifth blog', author_id: 5, is_published: true },
      { title: 'Sixth Blog', content: 'Content of the sixth blog', author_id: 6, is_published: false },
      { title: 'Seventh Blog', content: 'Content of the seventh blog', author_id: 7, is_published: true },
      { title: 'Eighth Blog', content: 'Content of the eighth blog', author_id: 8, is_published: false },
      { title: 'Ninth Blog', content: 'Content of the ninth blog', author_id: 9, is_published: true },
      { title: 'Tenth Blog', content: 'Content of the tenth blog', author_id: 10, is_published: false },
    ],
  });

  // Comments
  await prisma.comment.createMany({
    data: [
      { blog_id: 1, user_id: 1, content: 'Great post!' },
      { blog_id: 2, user_id: 2, content: 'Thanks for sharing!' },
      { blog_id: 3, user_id: 3, content: 'Very informative!' },
      { blog_id: 4, user_id: 4, content: 'Loved it!' },
      { blog_id: 5, user_id: 5, content: 'Interesting read.' },
      { blog_id: 6, user_id: 6, content: 'Well written.' },
      { blog_id: 7, user_id: 7, content: 'I learned a lot!' },
      { blog_id: 8, user_id: 8, content: 'Awesome!' },
      { blog_id: 9, user_id: 9, content: 'Good job!' },
      { blog_id: 10, user_id: 10, content: 'Keep it up!' },
    ],
  });

  // Likes
  await prisma.like.createMany({
    data: [
      { blog_id: 1, user_id: 1 },
      { blog_id: 2, user_id: 2 },
      { blog_id: 3, user_id: 3 },
      { blog_id: 4, user_id: 4 },
      { blog_id: 5, user_id: 5 },
      { blog_id: 6, user_id: 6 },
      { blog_id: 7, user_id: 7 },
      { blog_id: 8, user_id: 8 },
      { blog_id: 9, user_id: 9 },
      { blog_id: 10, user_id: 10 },
    ],
  });

  // CommentLikes
  await prisma.commentLike.createMany({
    data: [
      { comment_id: 1, user_id: 1 },
      { comment_id: 2, user_id: 2 },
      { comment_id: 3, user_id: 3 },
      { comment_id: 4, user_id: 4 },
      { comment_id: 5, user_id: 5 },
      { comment_id: 6, user_id: 6 },
      { comment_id: 7, user_id: 7 },
      { comment_id: 8, user_id: 8 },
      { comment_id: 9, user_id: 9 },
      { comment_id: 10, user_id: 10 },
    ],
  });

  // CommentReplies
  await prisma.commentReply.createMany({
    data: [
      { comment_id: 1, user_id: 2, content: 'I agree with this!' },
      { comment_id: 2, user_id: 1, content: 'Glad you found it useful!' },
      { comment_id: 3, user_id: 4, content: 'Totally!' },
      { comment_id: 4, user_id: 3, content: 'Thanks!' },
      { comment_id: 5, user_id: 6, content: 'Indeed!' },
      { comment_id: 6, user_id: 5, content: 'Absolutely!' },
      { comment_id: 7, user_id: 8, content: 'Well said!' },
      { comment_id: 8, user_id: 7, content: 'Couldn’t agree more!' },
      { comment_id: 9, user_id: 10, content: 'Exactly!' },
      { comment_id: 10, user_id: 9, content: 'Right on!' },
    ],
  });

  // Bookmarks
  await prisma.bookmark.createMany({
    data: [
      { blog_id: 1, user_id: 1 },
      { blog_id: 2, user_id: 2 },
      { blog_id: 3, user_id: 3 },
      { blog_id: 4, user_id: 4 },
      { blog_id: 5, user_id: 5 },
      { blog_id: 6, user_id: 6 },
      { blog_id: 7, user_id: 7 },
      { blog_id: 8, user_id: 8 },
      { blog_id: 9, user_id: 9 },
      { blog_id: 10, user_id: 10 },
    ],
  });

  // Flags
  await prisma.flag.createMany({
    data: [
      { entity_id: 1, entity_type: 'blog', flagged_by: 1, reason: 'Inappropriate content' },
      { entity_id: 2, entity_type: 'comment', flagged_by: 2, reason: 'Spam' },
      { entity_id: 3, entity_type: 'blog', flagged_by: 3, reason: 'False information' },
      { entity_id: 4, entity_type: 'comment', flagged_by: 4, reason: 'Offensive language' },
      { entity_id: 5, entity_type: 'blog', flagged_by: 5, reason: 'Copyright infringement' },
      { entity_id: 6, entity_type: 'comment', flagged_by: 6, reason: 'Harassment' },
      { entity_id: 7, entity_type: 'blog', flagged_by: 7, reason: 'Fake news' },
      { entity_id: 8, entity_type: 'comment', flagged_by: 8, reason: 'Misinformation' },
      { entity_id: 9, entity_type: 'blog', flagged_by: 9, reason: 'Violence' },
      { entity_id: 10, entity_type: 'comment', flagged_by: 10, reason: 'Hate speech' },
    ],
  });

  // Drafts
  await prisma.draft.createMany({
    data: [
      { title: 'Draft 1', content: 'Draft content 1', author_id: 1 },
      { title: 'Draft 2', content: 'Draft content 2', author_id: 2 },
      { title: 'Draft 3', content: 'Draft content 3', author_id: 3 },
      { title: 'Draft 4', content: 'Draft content 4', author_id: 4 },
      { title: 'Draft 5', content: 'Draft content 5', author_id: 5 },
      { title: 'Draft 6', content: 'Draft content 6', author_id: 6 },
      { title: 'Draft 7', content: 'Draft content 7', author_id: 7 },
      { title: 'Draft 8', content: 'Draft content 8', author_id: 8 },
      { title: 'Draft 9', content: 'Draft content 9', author_id: 9 },
      { title: 'Draft 10', content: 'Draft content 10', author_id: 10 },
    ],
  });

  // Followers
  await prisma.follower.createMany({
    data: [
      { user_id: 1, following_user_id: 2 },
      { user_id: 2, following_user_id: 3 },
      { user_id: 3, following_user_id: 4 },
      { user_id: 4, following_user_id: 5 },
      { user_id: 5, following_user_id: 6 },
      { user_id: 6, following_user_id: 7 },
      { user_id: 7, following_user_id: 8 },
      { user_id: 8, following_user_id: 9 },
      { user_id: 9, following_user_id: 10 },
      { user_id: 10, following_user_id: 1 },
    ],
  });

  // Notifications
  await prisma.notification.createMany({
    data: [
      { user_id: 1, type: 'comment', message: 'Someone commented on your post.' },
      { user_id: 2, type: 'like', message: 'Someone liked your post.' },
      { user_id: 3, type: 'follow', message: 'You have a new follower.' },
      { user_id: 4, type: 'bookmark', message: 'Someone bookmarked your post.' },
      { user_id: 5, type: 'flag', message: 'Your post has been flagged.' },
      { user_id: 6, type: 'reply', message: 'Someone replied to your comment.' },
      { user_id: 7, type: 'share', message: 'Your post has been shared.' },
      { user_id: 8, type: 'mention', message: 'You were mentioned in a post.' },
      { user_id: 9, type: 'invite', message: 'You have been invited to a group.' },
      { user_id: 10, type: 'reminder', message: 'You have a new reminder.' },
    ],
  });

  // Categories
  await prisma.category.createMany({
    data: [
      { name: 'Tech', description: 'Technology related content' },
      { name: 'Lifestyle', description: 'Lifestyle and well-being' },
      { name: 'Health', description: 'Health and fitness' },
      { name: 'Travel', description: 'Travel experiences and tips' },
      { name: 'Food', description: 'Food reviews and recipes' },
      { name: 'Finance', description: 'Financial advice and news' },
      { name: 'Education', description: 'Educational resources and guides' },
      { name: 'Entertainment', description: 'Movies, TV shows, and more' },
      { name: 'Sports', description: 'Sports news and updates' },
      { name: 'Science', description: 'Scientific discoveries and research' },
    ],
  });

  // PostCategories
  await prisma.postCategory.createMany({
    data: [
      { blog_id: 1, category_id: 1 },
      { blog_id: 2, category_id: 2 },
      { blog_id: 3, category_id: 3 },
      { blog_id: 4, category_id: 4 },
      { blog_id: 5, category_id: 5 },
      { blog_id: 6, category_id: 6 },
      { blog_id: 7, category_id: 7 },
      { blog_id: 8, category_id: 8 },
      { blog_id: 9, category_id: 9 },
      { blog_id: 10, category_id: 10 },
    ],
  });

  // Tags
  await prisma.tag.createMany({
    data: [
      { name: 'JavaScript', description: 'JavaScript related content' },
      { name: 'Health', description: 'Health-related content' },
      { name: 'Fitness', description: 'Fitness tips and advice' },
      { name: 'React', description: 'React.js tutorials and news' },
      { name: 'Node.js', description: 'Node.js guides and updates' },
      { name: 'AWS', description: 'Amazon Web Services resources' },
      { name: 'Python', description: 'Python programming tips' },
      { name: 'Travel', description: 'Travel experiences and tips' },
      { name: 'Finance', description: 'Financial advice and news' },
      { name: 'Science', description: 'Scientific discoveries and research' },
    ],
  });

  // PostTags
  await prisma.postTag.createMany({
    data: [
      { blog_id: 1, tag_id: 1 },
      { blog_id: 2, tag_id: 2 },
      { blog_id: 3, tag_id: 3 },
      { blog_id: 4, tag_id: 4 },
      { blog_id: 5, tag_id: 5 },
      { blog_id: 6, tag_id: 6 },
      { blog_id: 7, tag_id: 7 },
      { blog_id: 8, tag_id: 8 },
      { blog_id: 9, tag_id: 9 },
      { blog_id: 10, tag_id: 10 },
    ],
  });
}

main()
  .then(() => {
    console.log('Dummy data created successfully.');
  })
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
