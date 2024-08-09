import { BelongsTo, Column, DataType, ForeignKey, Model, Table } from "sequelize-typescript";
// import { User } from "./user.model";
import { Comment } from "./comment.model";
import { UserSignUp } from "src/login/model/login.model";

@Table({
    timestamps: true,
    tableName: "Ccomments"
})

export class Ccomment extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false
    })
    qna_com_comment: string;

    @ForeignKey(() => UserSignUp)
    @Column
    nick_name: string;

    @BelongsTo(() => UserSignUp, {
        foreignKey: 'nick_name',
        targetKey: 'nick_name'
    })
    Users: UserSignUp;

    @ForeignKey(() => Comment)
    @Column
    qna_comment_id: number

    @BelongsTo(() => Comment)
    Comments: Comment;

}