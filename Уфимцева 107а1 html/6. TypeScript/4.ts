type User = {
    id: string;
    name: string;
}

type Role = "student" | "teacher"

type Rate =  1 | 2 | 3 | 4 | 5

type Level =  "junior" | "middle" | "senior"

type Course = {
    id: number;
    title: string;
    role: Role;
    rate: Rate;
    level: Level;
}

/* --- */

type Student = User & { courses: { [id: number]: Omit<Course, "role"> & { role: Exclude<Role, "teacher">} } }

type Teacher = User & Partial<Pick<Course, "rate" | "level"> & { courses: { [id: number]: Omit<Course, "role" | "rate" | "level"> & { role: "teacher" } } }

type Director = User & { students: { [id: string]: Student }, teachers: { [id: string]: Omit<Teacher, "courses"> & Partial<Pick<Teacher, "rate">> } }

/*--  Проверка  --*/
const s1: Student = {
    id: "s1",
    name: "s1",
    courses: {
        [1]: {
            id: 1,
            title: "First",
            rate: 5,
            role: "student",
            level: "middle"
        }
    },
}

const t1: Teacher = {
    id: "t1",
    name: "t1",
    level: "junior",
    courses: {
        [5]: {
            id: 5,
            title: "Fifth",
            role: "teacher"
        },
        [1]: {
            ...s1.courses[1],
            role: "teacher"
        }
    }
}

const d1: Director = {
    id: "d1",
    name: "d1",
    students: {
        ["s1"]: s1,
        ["s2"]: {
            id: "s2",
            name: "s2"
        }
    },
    teachers: {
        ["t1"]: {
            ...t1,
            rate: 3,
        },
        ["t2"]: {
            id: "t2",
            name: "t2",
            level: "senior",
            rate: 5
        }
    }
}
