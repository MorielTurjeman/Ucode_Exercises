# class Restaurant:
#     def __init__(self, name, ratings, is_vegetarian):
#         self.name = name
#         self.ratings = ratings
#         self.is_vegetarian = is_vegetarian

#     def get_menu(self):
#         if self.is_vegetarian == True:
#             print("Yes Sir, We do have meat!")
#         else:
#             print("We have vegetables! Meat is murder!")


# r1 = Restaurant("Zoozaazo", 4, False)
# r2 = Restaurant("Top La Pompei", 3, False)
# r3 = Restaurant("El Viego", 5, True)
# # print(r3.ratings)

# print(r1.get_menu())
# print(r3.get_menu())


# EX-1
# class YouTubeLessonManager:
#     def __init__(self):
#         self.lessons = {}

#     def save(self, name, url):
#         name = name.casefold()
#         self.lessons[name] = url

#     def get(self, lesson):
#         lesson = lesson.casefold()
#         return self.lessons[lesson].casefold()


# lesson_manager = YouTubeLessonManager()
# lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
# # outputs: {"For-Loops": "https://www.youtube.com/watch?v=OnDr4J2UXSA"}
# # print(lesson_manager.lessons)
# # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
# # print(lesson_manager.lessons["For-Loops"])
# # # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
# # print(lesson_manager.get("For-Loops"))
# # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
# # print(lesson_manager.get("for-loops"))
# # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
# # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
# print(lesson_manager.get("for loops"))
# # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
# print(lesson_manager.get("for"))
# # outputs ['https://www.youtube.com/watch?v=OnDr4J2UXSA', 'https://www.youtube.com/watch?v=6TEGxJXLAWQ']
# print(lesson_manager.get("loops"))
