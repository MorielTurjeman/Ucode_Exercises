import json
with open('./nyc_jobs.json', 'r') as f:
    data = json.load(f)


def find_jobs_by_word(word):
    return [job for job in data if word in job.get("job_description")]


print(len(find_jobs_by_word("experience")))  # 165


def junior_jobs():
    entry_level = set([level["agency"]
                      for level in data if level["career_level"] == "Entry-Level"])
    in_broadway = set([
        brod["agency"] for brod in data if "Broadway" in brod["work_location"]])
    return print(entry_level & in_broadway)


junior_jobs()


def max_salary():
    maxi = set([salary["salary_range_to"]
                for salary in data if salary["salary_frequency"] == "Hourly"])
    not_entry = set([level["salary_range_to"]
                    for level in data if level["career_level"] != "Entry-Level"])
    res = maxi & not_entry
    return print(max(res))


max_salary()


def is_in_range(job, min_salary, max_salary):
    is_above_min = float(job.get("salary_range_from")) >= min_salary
    is_below_max = float(job.get("salary_range_to")) <= max_salary
    return is_above_min and is_below_max


salary_min = 17
salary_max = 18
agencies_in_range = [job["agency"]
                     for job in data if is_in_range(job, salary_min, salary_max)]
print("in range", (set(agencies_in_range)))
